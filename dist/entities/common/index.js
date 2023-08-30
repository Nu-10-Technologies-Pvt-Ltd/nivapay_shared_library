"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.M_Balance_Track = exports.M_Balance = void 0;
const m_balance_entity_1 = require("./models/m_balance.entity");
Object.defineProperty(exports, "M_Balance", { enumerable: true, get: function () { return m_balance_entity_1.M_Balance; } });
const m_balance_track_entity_1 = require("./models/m_balance_track.entity");
Object.defineProperty(exports, "M_Balance_Track", { enumerable: true, get: function () { return m_balance_track_entity_1.M_Balance_Track; } });
const Common_Entities = [
    m_balance_entity_1.M_Balance,
    m_balance_track_entity_1.M_Balance_Track
];
exports.default = Common_Entities;
//# sourceMappingURL=index.js.map