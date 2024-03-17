const CLIENT_ID="1048408877732-t0v7350oplbmc1ujiqlip21hd5f0lfnv.apps.googleusercontent.com";
const API_KEY="AIzaSyABRoqerMuHGYeG1s59af657mR0A2MJ25M"
const SCOPE="hhtps://apis.google.com/js/api.js"
const DISCOVERY_DOCUMENT="https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"

function fileHandle(){
    function initClient(){
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCUMENT,
            scope: SCOPE
        }).then()
    }
}

export default fileHandle;