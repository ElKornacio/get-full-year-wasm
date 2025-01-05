// The entry file of your WebAssembly module.

let lastFetchId = 0;
let fetchIdToCallbackId: Map<i32, i32> = new Map();

@external("env", "asyncFetch")
declare function asyncFetch(fetchId: i32, url: string, testMode: boolean): void

@external("env", "callCallback")
declare function callCallback(callbackId: i32, data: string): void

export function gotFetchResult(fetchId: i32, year_string: string, sponsored_by: string): void {
  console.log(sponsored_by);
  const callbackId = fetchIdToCallbackId.get(fetchId);
  if (callbackId) {
    callCallback(callbackId, year_string);
  }
}

export function getFullYearRaw(callbackId: i32, testMode: boolean): void {
  lastFetchId++;
  asyncFetch(lastFetchId, "https://getfullyear.com/api/year", testMode);
  fetchIdToCallbackId.set(lastFetchId, callbackId);
}
