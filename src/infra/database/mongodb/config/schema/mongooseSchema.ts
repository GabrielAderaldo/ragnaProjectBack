const mongoose = require('mongoose');
const { Schema } = mongoose;

const statsSchema = new Schema({
  STR: { type: Number, required: true },
  AGI: { type: Number, required: true },
  VIT: { type: Number, required: true },
  INT: { type: Number, required: true },
  DEX: { type: Number, required: true },
  LUK: { type: Number, required: true },
  POW: { type: Number, required: true },
  STA: { type: Number, required: true },
  WIS: { type: Number, required: true },
  SPL: { type: Number, required: true },
  CON: { type: Number, required: true },
  CRT: { type: Number, required: true },
});

const skillSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  numberOfLevels: { type: Number, required: true },
});

const equipmentSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, enum: ['TOP_HEAD', 'MIDDLE_HEAD', 'BOTTOM_HEAD', 'ARMOR', 'WEAPON', 'SHIELD', 'FOOT', 'ACCESSORY_1', 'ACCESSORY_2', 'COVER'], required: true },
  description: { type: String, required: true },
  refinements: { type: String, required: true },
  cards: { type: [String] },
  runes: { type: [String] },
  enchantments: { type: [String] },
  gems: { type: [String] },
  obtainMethod: { type: String, required: true },
});

const buildLayerSchema = new Schema({
  equipments: { type: [equipmentSchema], required: true },
  stats: { type: statsSchema, required: true },
});

const buildModelSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  skillTree: { type: [skillSchema], required: true },
  earlyGame: { type: buildLayerSchema, required: true },
  midGame: { type: buildLayerSchema, required: true },
  endGame: { type: buildLayerSchema, required: true },
  notes: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  rating: { type: Number, required: true },
});

const BuildModel = mongoose.model('BuildModel', buildModelSchema);

export default BuildModel;