

let slideshow = {
    photoList:  ['mountainPic', 'oceanPic', 'desertPic', 'forrestPic', 'snowPic', 'uptownPic','cloudyDayPic', 'beachPic', 'sunnyDayPic', 'whiteSandsPic' ],
    currentPhotoIndex: 0,
        nextPhoto: function() { 
                if (this.currentPhotoIndex < this.photoList.length - 1) {
                    this.currentPhotoIndex ++;
                    // console.log(this.currentPhotoIndex);
                    console.log(this.photoList[this.currentPhotoIndex]);
                } else {
                    this.pause()
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
    play: function() {
        let a = this;
        this.playInterval = setInterval(function(){
            a.nextPhoto();
        },2000);
        console.log(this.playInterval)
    },

    pause: function() {
        clearInterval(this.playInterval);
    }

}

// slideshow.nextPhoto();
// slideshow.prevPhoto();
slideshow.play();







