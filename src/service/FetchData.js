export default class FetchData {
    startUrl = 'https://api.spacexdata.com/v4/';
    
    getResourse = async url => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error (res.status);
        } 
        return await res.json();
    }
        
    getRocket = async () => await this.getResourse(this.startUrl + 'rockets');

    getLaunches = async () => await this.getResourse(this.startUrl + 'launches/past');

    getCompany = async () => await this.getResourse(this.startUrl + 'company');
   
}