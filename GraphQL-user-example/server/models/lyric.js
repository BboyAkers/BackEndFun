import { Schema, model } from "mongoose";

const LyricSchema = new Schema({
    song: {
      type: Schema.Types.ObjectId,
      ref: 'song'
    },
    likes: { type: Number, default: 0 },
    content: { type: String }
  });
  
  LyricSchema.statics.like = function(id) {
  
    return Lyric.findById(id)
      .then(lyric => {
        ++lyric.likes;
        return lyric.save();
      })
  }
  
export const Lyric = model('lyric', LyricSchema);
  