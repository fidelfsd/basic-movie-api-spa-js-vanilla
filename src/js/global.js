export const global = {
   apiKey: "c0bb10b9543a8ca0ad865a5b2cc44449",
   baseUrl: "https://api.themoviedb.org/3",
   images: "https://image.tmdb.org/t/p",
};

export const SPINNER = {
   defaul: "spinner",
   material: "spinner-material",
   comet: "spinner-comet",
};
/*
## Add Supported Image Sizes
                                 Min Res      Max Res
poster   = Poster ............  500 x 750   2000 x 3000
backdrop = Fanart ............ 1280 x 720   3840 x 2160
still    = TV Show Episode ... 1280 x 720   3840 x 2160
profile  = Actors Actresses ..  300 x 450   2000 x 3000
logo     = TMDb Logo

## API Supported Image Sizes

|  poster  | backdrop |  still   | profile  |   logo   |
| :------: | :------: | :------: | :------: | :------: |
| -------- | -------- | -------- |    w45   |    w45   |
|    w92   | -------- |    w92   | -------- |    w92   |
|   w154   | -------- | -------- | -------- |   w154   |
|   w185   | -------- |   w185   |   w185   |   w185   |
| -------- |   w300   |   w300   | -------- |   w300   |
|   w342   | -------- | -------- | -------- | -------- |
|   w500   | -------- | -------- | -------- |   w500   |
| -------- | -------- | -------- |   h632   | -------- |
|   w780   |   w780   | -------- | -------- | -------- |
| -------- |  w1280   | -------- | -------- | -------- |
| original | original | original | original | original |

Original Size is the size of the uploaded image.
It can be between Minimum Resolution and Maximum Resolution.
*/
