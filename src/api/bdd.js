export function getCucumberReportURL(timestamp) {
  return `/cucumber-api/?url=${window.location.origin}/api/test/raw/serviceTest/${timestamp}`;
}
