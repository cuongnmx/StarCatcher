const Player = require('Player');
const Star = require('Star');

var Game = cc.Class({
    extends: cc.Component,

    properties: {
        starPrefab: {
            default: null,
            type: cc.Prefab
        },
        
        scoreFXPrefab: {
            default: null,
            type: cc.Prefab
        },
        
        maxStarDuration: 0,
        minStarDuration: 0,
        
        ground: {
            default: null,
            type: cc.Node
        },
        
        player: {
            default: null,
            type: Player
        },
        
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        
        scoreAudio: {
            default: null,
            url: cc.AudioClip
        },
        
        btnNode: {
            default: null,
            type: cc.Node
        },
        
        gameOverNode: {
            default: null,
            type: cc.Label
        },
        
        instruction: {
            default: null,
            multiline: true
        },
        
        
        
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
