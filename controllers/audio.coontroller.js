const Audio = require('../models/audiobook')

exports.createAudiobook = async(req, res) =>{
    console.log(req.body);
    const { name, author, profileImageUrl, published } = req.body;
    const newAudio = new Audio({ name, author, profileImageUrl, published });
    const audioConf = await newAudio.save();
    res.status(200).json(audioConf);
}

exports.getAudiobooks = async(req, res) =>{
    const audios = await Audio.find();
    res.status(200).json(audios);
}


exports.getAudiobook = async(req, res) =>{
    const audio = await Audio.findById(req.params.id)
    res.status(200).json(audio);
}

exports.updateAudiobook = async(req, res) =>{
    const updateAudio = await Audio.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateAudio);
}


exports.deleteAudiobook = async(req, res) =>{
    await Audio.findByIdAndDelete(req.params.id);
    res.status(204).json();
}
