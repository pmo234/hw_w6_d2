const Park = function (name,ticketPrice,dinosaurCollection){
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurCollection = []
}

Park.prototype.addADinosaur = function(species){
    this.dinosaurCollection.push(species)
};

Park.prototype.removeADinosaur = function(species){
    let i = -1
    for (type of this.dinosaurCollection){
        i += 1
        if (species === type){
            this.dinosaurCollection.splice(i)
            break
        }
    }
}

Park.prototype.mostPopularDinosaur = function(){
    let mostPopular = this.dinosaurCollection[0].guestsAttractedPerDay
    for(type of this.dinosaurCollection){
        if (type.guestsAttractedPerDay > mostPopular){
            mostPopular = type.guestsAttractedPerDay
            this.dinosaurCollection = type

        }
        
    }
}

Park.prototype.allDinosaursOfCertainSpecies = function(species){
    let listOfDinosaurs = []
    for (dinosaurs of this.dinosaurCollection){
        if (dinosaurs.species === species){
            listOfDinosaurs.push(dinosaurs)

        }
    }

}

Park.prototype.visitorsPerDay = function(dinosaurCollection){
    let totalVisitors = 0
    for (visitors of this.dinosaurCollection.guestsAttractedPerDay){
        totalVisitors += visitors
    }
}

Park.prototype.visitorsPerYear = function(dinosaurCollection){
    let totalVisitors = 0
    let yearVisitors = 0
    for (visitors of this.dinosaurCollection.guestsAttractedPerDay){
        totalVisitors += visitors
    }
    yearVisitors = yearVisitors*365

}

Park.prototype.revenuePerYear = function(dinosaurCollection){
    let totalVisitors = 0
    let yearVisitors = 0
    let yearRevenue = 0
    for (visitors of this.dinosaurCollection.guestsAttractedPerDay){
        totalVisitors += visitors
    }
    yearVisitors = totalVisitors*365
    yearRevenue = yearVisitors*this.ticketPrice

}
module.exports = Park