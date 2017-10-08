const storage = chrome.storage.local;

chrome.storage.onChanged.addListener(function(changes, namespace) {
	if (changes.results) {
		const data = changes.results.newValue.data;
		window.data = data;

		console.log(data);

		if (data) {
			renderView(data);
		}
	}
});

function renderView(data) {
	const {view, total} = generateViewFromData(data);
	$('#container').html(view);
	$('#total').html(total);
}

storage.get({'results': []}, function(items) {
	const data = items.results.data;
	window.data = data;
	renderView(data);
});

function generateStatusBoxTable(status) {
	const providers = Object.keys(status.provider_status);

	const statusBox = providers.reduce((prev, next) => {
		const statusCode = status.provider_status[next].status;
		const label = statusCode === 'COMPLETED' ? 'success': 'warning';

		return `
			${prev}
			<td><span class="badge badge-${label}" style="padding:5px; font-size:10px;">${next}</span></td>
		`;
	}, '');

	return `<table class="table table-sm"><tr>${statusBox}</tr></table>`;
}

function generateViewFromData(data) {
	const searchRequest = data.search_request;
	const status = searchRequest.status;
	const applicationRequest = data.application_request;
	const _links = searchRequest._links;
	const total = data.aggregations.search_stats;

	const transportsLinks = Object.keys(_links['transports']).reduce((prev, next) => {
			return `${prev} &nbsp; <a href="${_links['transports'][next]}">${next}</a>`;
		}, '');

	const createHorizontalProperties = (properties, data) => {
		let headers = properties.reduce((prev, next) => {
			return `${prev}
					<td>
						<td class="font-weight-bold">${next.replace(/_/g, ' ').toLowerCase()}</td>
					</td>`;
		}, '');

		let values = properties.reduce((prev, next) => {
			return `${prev}
					<td>
						<td>${data[next]}</td>
					</td>`;
		}, '');

		return `<tr>${headers}</tr><tr>${values}</tr>`;
	}

	const createProperties = (properties, data) => {
		return properties.reduce((prev, next) => {
			let content = data[next];

			if (Array.isArray(content)) {
				//content = content.join(', ');
				content = content.reduce((prev, next) => {
					return `${prev}
							<code>${next}</code>`; 
				}, '');
			}

			if (typeof content === 'object') {
				return `
					${prev}
					<tr>
						<td class="font-weight-bold">${next.replace(/_/g, ' ').toLowerCase()}</td>
						<td>
							<table>
								${createHorizontalProperties(Object.keys(content), content)}
							</table>
						</td>
					</tr>
				`;
			}

			return `${prev}
					<tr>
						<td class="font-weight-bold">${next.replace(/_/g, ' ').toLowerCase()}</td>
						<td>${content}</td>
					</tr>`;
		}, '');
	}

	const searchRequestData = createProperties([
		'identity',
		'created',
		'agent',
		'channel',
		'country_context',
		'currency',
		'ages',
		'journeys',
		'resident',
		'large_family',
		'combined',
		'platform',
		// 'type_request',

	], searchRequest);

	const applicationRequestData = createProperties(
		Object.keys(applicationRequest)
	, applicationRequest);

	const statusBox = generateStatusBoxTable(status);

	let view = `<div class="row" style="color:#444;font-size:10px;">
					<div class="col">
						<nav class="nav nav-tabs" id="myTab" role="tablist">
						  <a 	class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-expanded="true">
						  	Search
						  </a>
						  <a 	class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile">
						  	Application Request
						  </a>
						</nav>
						<div class="tab-content" id="nav-tabContent">
						  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
							<table class="table table-hover table-sm table-responsive">
								${searchRequestData}
							</table>
							<table class="table table-hover table-sm table-responsive">
								<tr>
									<td>${transportsLinks}</td>
									<td><a href="${_links['packages']}">Packages</a></td>
									<td><a href="${_links['combinations']}">Combinations</a></td>
								</tr>
							</table>
							${statusBox}
						  </div>
						  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
							<table class="table table-hover table-sm table-responsive">
								${applicationRequestData}
							 </table>
						  </div>
						</div>
					</div>
				</div>`;

	return {
		view: view,
		total: total
	};
}


// copy: function(str, mimetype) {
//   document.oncopy = function(event) {
//     event.clipboardData.setData(mimetype, str);
//     event.preventDefault();
//   };
//   document.execCommand("Copy", false, null);
// }