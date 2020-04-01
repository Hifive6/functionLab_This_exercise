let slideshow = {
    photoList: ['mountainPic', 'oceanPic', 'desertPic', 'forrestPic'],
    currentPhotoIndex: 0,
        nextPhoto: function() { 
                if (this.currentPhotoIndex < this.photoList.length - 1) {
                    this.currentPhotoIndex ++;
                    // console.log(this.currentPhotoIndex);
                    console.log(this.photoList[this.currentPhotoIndex]);
                } else {
                    console.log("End of Slideshow")
                }
        },
    prevPhoto: function() {
        if (this.currentPhotoIndex > 0){
            this.currentPhotoIndex --;
            //console.log(this.currentPhotoIndex);
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log("Start of Slideshow")
        }
    },
    getCurrentPhoto: function() {
        if (this.currentPhotoIndex < this.photoList.length) {
            return this.photoList[this.currentPhotoIndex];
        }
    },

    playInterval: null,
    play: function(){
        this.nextPhoto

    }
}







