let slideshow = {
    photoList: ['mountainPic', 'oceanPic', 'desertPic', 'forrestPic'],
    currentPhotoIndex: 0,
    nextPhoto: function() { 
            if (this.currentPhotoIndex < this.photoList.length - 1) {
                this.currentPhotoIndex ++;
                console.log(this.currentPhotoIndex);
                console.log(this.photoList[this.currentPhotoIndex]);
            } else {
                console.log("End of Slideshow")
            }
    },
    prevPhoto: function() {
        if (this.currentPhotoIndex <= this.photoList.length){
            this.currentPhotoIndex --;
            console.log(this.currentPhotoIndex);
            console.log(this.photoList[this.currentPhotoIndex]);
        }
    },
    getCurrentPhoto: function() {
        if (this.currentPhotoIndex < this.photoList.length -1) {
            console.log(this.photoList[this.currentPhotoIndex])
        }
    }
}
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.getCurrentPhoto();
// console.log(slideshow);
