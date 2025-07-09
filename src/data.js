export const API_KEY = 'AIzaSyAxfRQBXXyCiX9RNYDDFJHTil3EZSuoWik'

export const value_converter = (value) => {
    if(value >= 1000000){
        return Math.floor(value / 1000000) + "M";
    }
    else if(value >= 1000){
        return Math.floor(value / 1000) + "K";
    }
    else {
        return value;
    }
}

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=0&key=AIzaSyAxfRQBXXyCiX9RNYDDFJHTil3EZSuoWik