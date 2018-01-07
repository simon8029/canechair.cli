export default function getBaseUrl() {
  const devMode = window.location.hostname === 'localhost';
  return devMode ? "http://localhost:8139/" : '/';
}
