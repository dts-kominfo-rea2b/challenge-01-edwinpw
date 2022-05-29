// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat

let setUserInfo = new Map();

//first user
setUserInfo.set('firstUserName','Monica');
setUserInfo.set('firstUserGender','Female');
setUserInfo.set('firstUserAge','17');
setUserInfo.set('firstUserEmail','monica@dingdong.com');
setUserInfo.set('firstUserisHavePet','Yes');

const firstUserFavoriteColor	 = Array.from(new Set([
    'Yellow', 'Pink', 'White', 'Purple'
]))

const firstuserEducation = [
    {
        name: 'SD 01', 
        city: 'Jakarta', 
        graduate: 2016
    },
    {
        name: 'SMP 02', 
        city: 'Jakarta', 
        graduate: 2019
    },
    {
        name: 'SMA 03', 
        city: 'Tangerang'
    }
]

var resultfirstuserEducation = firstuserEducation.map(function(el) {
    var o = Object.assign({}, el);
    return o;
})


const firstUserFavoriteRestaurant = Array.from(new Set([
    'Bento',
    'Sushi',
    'Pancake',
    'Eggy',
    'Tempura',
    'Bento',
    'Eggy',
    'Padang',
    'Tteok',
    'Sushi',
    'Sushi'
]))


//second user
setUserInfo.set('secondUserName','Wendy');
setUserInfo.set('secondUserGender','Male');
setUserInfo.set('secondUserAge','23');
setUserInfo.set('secondUserEmail','wendy@dingdong.com');
setUserInfo.set('secondUserisHavePet','No');

const secondUserFavoriteColor	 = Array.from(new Set([
    'Blue', 'Black', 'Grey'
]))

const seconduserEducation = [
    {
        name: 'SD 02',
        city: 'Jakarta',
        graduate: 2010
    },
    {
        name: 'SMP 03',
        city: 'Bogor',
        graduate: 2013
    },
    {
        name: 'SMA 01',
        city: 'Surabaya',
        graduate: 2016
    },
    {
        name: 'Universitas Maju',
        city: 'Tangerang'
    }
]

var resultseconduserEducation = seconduserEducation.map(function(el) {
    var o = Object.assign({}, el);
    return o;
})

const secondUserFavoriteRestaurant = Array.from(new Set([
    'Tempura', 
    'Bento', 
    'Sushi', 
    'Pancake', 
    'Padang', 
    'Katsu', 
    'Geprek', 
    'Pancake', 
    'Eggy'
]))

// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: setUserInfo.get('firstUserName'),
    gender: setUserInfo.get('firstUserGender'),
    age: setUserInfo.get('firstUserAge'),
    email: setUserInfo.get('firstUserEmail'),
    favoriteColor : firstUserFavoriteColor,
    isHavePet : setUserInfo.get('firstUserisHavePet'),
    education : resultfirstuserEducation,
    favoriteRestaurant : firstUserFavoriteRestaurant

};
const secondUser = {
    name: setUserInfo.get('secondUserName'),
    gender: setUserInfo.get('secondUserGender'),
    age: setUserInfo.get('secondUserAge'),
    email: setUserInfo.get('secondUserEmail'),
    favoriteColor : secondUserFavoriteColor,
    isHavePet : setUserInfo.get('secondUserisHavePet'),
    education : resultseconduserEducation,
    favoriteRestaurant : secondUserFavoriteRestaurant
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser,secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    // console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};