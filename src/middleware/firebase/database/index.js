//ACTIONS ON DATABASE
import firebaseInstance from '../'

// return firebaseInstance.firebase.database().ref(``)
// .then

function create(options) {
    return firebaseInstance.firebase.database().ref(`users/${window.user.uid}/data/${options.entity}`).push(options.item);
}

export default {
    create,
    // read,
    // update,
    // remove

}