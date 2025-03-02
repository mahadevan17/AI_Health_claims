const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
    
    module.exports = buildModule("MedicareClaimsModule", (m) => {
    
    const MedicareClaimsContract = m.contract("MedicareClaims", ["MedicareClaims_",100], {});
    return { MedicareClaimsContract };

    });