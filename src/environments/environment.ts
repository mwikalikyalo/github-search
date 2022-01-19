// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  _apiUrl: "https://api.github.com",
  get apiUrl() {
    return this._apiUrl;
  },
  set apiUrl(value) {
    this._apiUrl = value;
  },
  _apiKey: "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",
  get apiKey() {
    return this._apiKey;
  },
  set apiKey(value) {
    this._apiKey = value;
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
