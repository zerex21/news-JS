import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'f81e012aaf054f8b9954be778dabd57e', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
