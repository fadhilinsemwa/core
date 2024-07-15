// utils/tcuApi.ts
import axios from 'axios';

export const checkStatus = async (indexNumbers: string[], username: string, sessionToken: string) => {
  const requestXml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <Request>
      <UsernameToken>
        <Username>${username}</Username>
        <SessionToken>${sessionToken}</SessionToken>
      </UsernameToken>
      <RequestParameters>
        ${indexNumbers.map(index => `<f4indexno>${index}</f4indexno>`).join('')}
      </RequestParameters>
    </Request>
  `;

  const response = await axios.post('/api/tcuapi/checkStatus', requestXml, {
    headers: { 'Content-Type': 'application/xml' },
  });

  return response.data;
};
