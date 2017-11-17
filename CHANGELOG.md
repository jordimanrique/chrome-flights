# Changelog
All notable changes to this project will be documented in this file.

## [0.4.0] - 2017-11-17
### Added
- select provider in search results
- enable/disable with only one click
- enable/disable provider selection when combination info is shown

## [0.3.0] - 2017-10-21
### Added
- injected script in web page to control ajax responses.
- copy text functionality in result boxes, highlighted as blue text.
- chrome notifications functionality.
- notifications are showed when copy text function is triggered.
- Price lines link in results boxes.
- Link to combinationId Api Transport
- Active Info functionality in popup view.

### Changed
- change long-running extension (background persistent) to page Event.
- fix hidden menu behaviour.
- fix package priceLines transform.

### Removed
- html title attribute info in results boxes.
- webRequest dependency.

## [0.2.2] - 2017-10-15
### Changed
- Fix get storage chrome extension.
- Fix click events on flight boxes.

## [0.2.1] - 2017-10-15
### Changed
- Price lines box, avoid internal scrolling.
- contentScript.js added to webpack
- Fix popup table visualization

## [0.2.0] - 2017-10-14
### Added
- New development environment with webpack and babel to use ES6
- New shortcuts for linux
- Added price lines in data object (popup view).
- Added top menu options.

### Changed
- Shortcuts behaviour. Show only transports, packages o all.

## [0.1.0] - 2017-10-11
### Added
- Popup view with search request info.
- Toggle view functionality for package and transport info.
- Links added for Api Transports links.
- Status bar to visualize provider status.
- Fixed chrome bug repainting popup.

