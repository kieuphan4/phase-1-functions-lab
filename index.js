let pickup = 42;

function distanceFromHqInBlocks(start) {
    if (start > pickup) {
        return start - pickup
    } else if (start < pickup) {
        return pickup - start
    }
}

let feet = 264;
function distanceFromHqInFeet(start) {
    return distanceFromHqInBlocks(start) * feet
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * feet
    } else if (start < destination) {
        return (destination - start) * feet
    }
}


function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start,destination);
    if (distance < 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}