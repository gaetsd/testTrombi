/* global angular */

// -----------------------
// Pas besoin de modifier ce fichier
// -----------------------

angular.module('app')
/**
 * User factory
 * @returns {Array} Base de données json regroupant les utilisateurs à afficher dans la mosaïque
 */
.factory('UserFactory', function () {
    'use strict';
    var users = [
        {
            id: 1,
            photo: 'http://ngeurope.org/images/avatars/misko.jpg',
            firstname: 'Misko',
            lastname: 'Hevery',
            description: 'Father of AngularJS. He has passion for making complex things simple.',
            twitter: 'https://twitter.com/mhevery'
                    },
        {
            id: 2,
            photo: 'http://ngeurope.org/images/avatars/julie.jpg',
            firstname: 'Julie',
            lastname: 'Ralph',
            description: 'Julie works at Google on Protractor, the E2E test framework for Angular apps.',
            twitter: 'https://twitter.com/SomeJulie'
                    },
        {
            id: 3,
            photo: 'http://ngeurope.org/images/avatars/johnlin.jpg',
            firstname: 'John',
            lastname: 'Lindquist',
            description: 'Creator of Egghead.io + JetBrains Evangelist + Productivity addict.',
            twitter: 'https://twitter.com/johnlindquist'
                    },
        {
            id: 4,
            photo: 'http://ngeurope.org/images/avatars/pascal.jpg',
            firstname: 'Pascal',
            lastname: 'Precht',
            description: 'Pascal is a front-end engineer with a love for evolving technologies in the open web. He loves contributing to open source and is the creator of the popular angular-translate module.',
            twitter: 'https://twitter.com/johnlindquist'
                    },
        {
            id: 5,
            photo: 'http://ngeurope.org/images/avatars/zack.jpg',
            firstname: 'Zack',
            lastname: 'Brown',
            description: 'Zack is the creator of Famo.us/Angular. He enjoys exploration, people, and solving problems. Zack builds web software at Thomas Street in San Francisco.',
            twitter: 'https://twitter.com/zackaboo'
                    },
        {
            id: 6,
            photo: 'http://ngeurope.org/images/avatars/brad.jpg',
            firstname: 'Brad',
            lastname: 'Green',
            description: 'Brad Green works at Google as an engineering director where he manages AngularJS, AngularDart and several other projects.',
            twitter: 'https://twitter.com/bradlygreen'
                    },
        {
            id: 7,
            photo: 'http://ngeurope.org/images/avatars/igor.jpg',
            firstname: 'Igor',
            lastname: 'Minar',
            description: 'Igor is a software engineer at Google. He is the lead of the AngularJS team.',
            twitter: 'https://twitter.com/IgorMinar'
                    }
                ];


    return {
        getUsers: getUsers,
        getUser: getUser
    };
    /**
     * Get the list of user
     * @returns {Array} The list of users
     */
    function getUsers() {
        return users;
    }
    /**
     * Get one user by id
     * @param   {integer} id User\'s id to find
     * @returns {Object}  The user found or null
     */
    function getUser(id) {
        for(var i = 0 ; i < users.length ; i++) {
            var user = users[i];
            if(user.id === id) {
                return user;
            }
        }
        return null;
    }
});