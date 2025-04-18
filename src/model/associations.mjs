import User from './User.mjs';
import Outline from './Outline.mjs';
import Proposal from './Proposal.mjs';
import Skripsi from './Skripsi.mjs';
import Pembimbing from './Pembimbing.mjs';
import PersetujuanOutline from './PersetujuanOutline.mjs';
import StatusSkripsi from './StatusSkripsi.mjs';
import Penguji from './Penguji.mjs';
import PenilaianSkripsi from './PenilaianSkripsi.mjs';

User.hasMany(Outline, { foreignKey: 'userId' });
User.hasMany(Proposal, { foreignKey: 'userId' });
User.hasMany(Skripsi, { foreignKey: 'userId' });

User.hasMany(Pembimbing, { as: 'mahasiswaPembimbing', foreignKey: 'mahasiswaId' });
User.hasMany(Pembimbing, { as: 'dosenPembimbing', foreignKey: 'dosenId' });
Pembimbing.belongsTo(User, { as: 'mahasiswa', foreignKey: 'mahasiswaId' });
Pembimbing.belongsTo(User, { as: 'dosen', foreignKey: 'dosenId' });

Outline.hasOne(PersetujuanOutline, { foreignKey: 'outlineId' });
PersetujuanOutline.belongsTo(Outline, { foreignKey: 'outlineId' });
PersetujuanOutline.belongsTo(User, { as: 'reviewer', foreignKey: 'reviewerId' });

Skripsi.hasOne(StatusSkripsi, { foreignKey: 'skripsiId' });
StatusSkripsi.belongsTo(Skripsi, { foreignKey: 'skripsiId' });
StatusSkripsi.belongsTo(User, { as: 'pembimbing', foreignKey: 'pembimbingId' });

Skripsi.hasMany(Penguji, { foreignKey: 'skripsiId' });
Penguji.belongsTo(Skripsi, { foreignKey: 'skripsiId' });
Penguji.belongsTo(User, { as: 'dosen', foreignKey: 'dosenId' });

Penguji.hasOne(PenilaianSkripsi, { foreignKey: 'pengujiId' });
PenilaianSkripsi.belongsTo(Penguji, { foreignKey: 'pengujiId' });