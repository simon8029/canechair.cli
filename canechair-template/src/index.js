import './index.css';
import { getParts } from './api/partsApi';

getParts().then(res => {
  let parts = "";
  res.forEach(part => {
    parts += `
    <tr>
      <td>${part.id}</td>
      <td>${part.name}</td>
    </tr>
    `;
  });

  global.document.getElementById('parts').innerHTML = parts;
});
