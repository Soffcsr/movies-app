export default class HttpServices {
    url = process.env.REACT_APP_BASE_URL;
  
    postData = async (item, added_url, tokenId = "") => {
      const token = localStorage.getItem(tokenId);
  
      const requestOptions = this.postRequestOptions(token, item);
  
      return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
        response.json()
      );
    };
  
    postFromExternalURL = async(item, added_url, externalTokenId = "") => {
      const token = await localStorage.getItem(externalTokenId);
  
      const requestOptions = this.postRequestOptions(token, item)
  
      return fetch(this.urlExternal + "/" + added_url, requestOptions).then((response) => 
        response.json()
      );
    }
  
    getData = async (added_url, tokenId = "") => {
      const token = await localStorage.getItem(tokenId);
  
      const requestOptions = this.getRequestOptions(token);
  
      return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
        response.json()
      );
    };
  
    getFromExternalURL = async (added_url, tokenId = "") => {
      const token = await localStorage.getItem(tokenId);
      const requestOptions = this.getRequestOptions(token);
  
      return fetch(this.urlExternal + "/" + added_url, requestOptions).then((response) =>
        response.json()
      );
    }
  
    putData = async (item, added_url, tokenId = "") => {
      const token = localStorage.getItem(tokenId);
  
      const requestOptions = this.putRequestOptions(token, item);
  
      return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
        response.json()
      );
    };
  
    deleteData = async (added_url, tokenId = "") => {
      const token = localStorage.getItem(tokenId);
  
      const requestOptions = this.deleteRequestOptions(token);
      return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
        response.json()
      );
    };
  
    getRequestOptions = (token) => {
      let requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-type": "application/json",
        },
      };
  
      return requestOptions;
    };
  
    postRequestOptions = (token, item) => {
      let requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(item),
      };
  
      return requestOptions;
    };
  
    putRequestOptions = (token, item) => {
      let requestOptions = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(item),
      };
      return requestOptions;
    };
  
    deleteRequestOptions = (token) => {
      let requestOptions = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-type": "application/json",
        },
      };
      return requestOptions;
    };
  }