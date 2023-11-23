var express = require('express');
var Client=require('../models/apic');  //il faut mettre url 


async function show (req, res, next) {
    try{
    const data= await Client.find();
    res.json(data);
    }catch(err){
      console.log(err);
    }
  }

  async function add(req, res, next) {
    try{
  const client=new Client(req.body);
  await client.save();
  res.status(200).send('add sucess');
    }catch(err){
  console.log(err);
    }
  }


  module.exports = {show,add};