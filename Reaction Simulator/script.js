function simulateReaction() {
    const reactant1 = document.getElementById('reactant1').value;
    const reactant2 = document.getElementById('reactant2').value;

    let reaction = "";

    // Extended reactions for each pair of elements
    const reactions = {
        "H": {
            "O": "2H₂ + O₂ -> 2H₂O (Water) - Exothermic",
            "Cl": "H₂ + Cl₂ -> 2HCl (Hydrochloric Acid) - Exothermic",
            "N": "3H₂ + N₂ -> 2NH₃ (Ammonia) - Endothermic",
            "C": "H₂ + C -> CH₄ (Methane) - Exothermic",
            "Fe": "H₂ + Fe -> FeH₂ (Iron Hydride) - Decomposition",
            "Al": "H₂ + Al -> AlH₃ (Aluminum Hydride) - Decomposition",
            "Na": "H₂ + 2Na -> 2NaH (Sodium Hydride) - Exothermic",
            "S": "H₂ + S -> H₂S (Hydrogen Sulfide) - Decomposition"
        },
        "O": {
            "C": "C + O₂ -> CO₂ (Carbon Dioxide) - Exothermic",
            "Fe": "4Fe + 3O₂ -> 2Fe₂O₃ (Iron Oxide) - Exothermic",
            "Al": "4Al + 3O₂ -> 2Al₂O₃ (Aluminum Oxide) - Exothermic",
            "N": "O₂ + N₂ -> NO₂ (Nitrogen Dioxide) - Endothermic",
            "S": "O₂ + S -> SO₂ (Sulfur Dioxide) - Exothermic",
            "Na": "O₂ + 4Na -> 2Na₂O (Sodium Oxide) - Exothermic"
        },
        "H": {
            "O": "2H₂ + O₂ -> 2H₂O (Water) - Exothermic",
            "Cl": "H₂ + Cl₂ -> 2HCl (Hydrochloric Acid) - Exothermic",
            "N": "3H₂ + N₂ -> 2NH₃ (Ammonia) - Endothermic",
            "C": "H₂ + C -> CH₄ (Methane) - Exothermic",
            "Fe": "H₂ + Fe -> FeH₂ (Iron Hydride) - Decomposition",
            "Al": "H₂ + Al -> AlH₃ (Aluminum Hydride) - Decomposition",
            "Na": "H₂ + 2Na -> 2NaH (Sodium Hydride) - Exothermic",
            "S": "H₂ + S -> H₂S (Hydrogen Sulfide) - Decomposition",
            "K": "H₂ + 2K -> 2KH (Potassium Hydride) - Exothermic",
            "Mg": "H₂ + Mg -> MgH₂ (Magnesium Hydride) - Exothermic"
        },
        "O": {
            "C": "C + O₂ -> CO₂ (Carbon Dioxide) - Exothermic",
            "Fe": "4Fe + 3O₂ -> 2Fe₂O₃ (Iron Oxide) - Exothermic",
            "Al": "4Al + 3O₂ -> 2Al₂O₃ (Aluminum Oxide) - Exothermic",
            "N": "O₂ + N₂ -> NO₂ (Nitrogen Dioxide) - Endothermic",
            "S": "O₂ + S -> SO₂ (Sulfur Dioxide) - Exothermic",
            "Na": "O₂ + 4Na -> 2Na₂O (Sodium Oxide) - Exothermic",
            "K": "O₂ + K -> KO₂ (Potassium Oxide) - Exothermic",
            "Mg": "2Mg + O₂ -> 2MgO (Magnesium Oxide) - Exothermic"
        },
        "C": {
            "O": "C + O₂ -> CO₂ (Carbon Dioxide) - Exothermic",
            "N": "C + N₂ -> CN (Cyanogen) - Endothermic",
            "S": "C + S -> CS₂ (Carbon Disulfide) - Exothermic",
            "Cl": "C + 2Cl₂ -> CCl₄ (Carbon Tetrachloride) - Exothermic"
        },
        "N": {
            "O": "O₂ + N₂ -> NO₂ (Nitrogen Dioxide) - Endothermic",
            "H": "3H₂ + N₂ -> 2NH₃ (Ammonia) - Endothermic",
            "C": "C + N₂ -> CN (Cyanogen) - Endothermic",
            "P": "4P + 5N₂ -> P₄N₅ (Phosphorus Nitride) - Endothermic"
        },
        "Na": {
            "Cl": "2Na + Cl₂ -> 2NaCl (Sodium Chloride) - Exothermic",
            "O": "4Na + O₂ -> 2Na₂O (Sodium Oxide) - Exothermic",
            "S": "2Na + S -> Na₂S (Sodium Sulfide) - Exothermic",
            "H": "2Na + H₂ -> 2NaH (Sodium Hydride) - Exothermic"
        },
        "Cl": {
            "H": "H₂ + Cl₂ -> 2HCl (Hydrochloric Acid) - Exothermic",
            "Na": "2Na + Cl₂ -> 2NaCl (Sodium Chloride) - Exothermic",
            "P": "2P + 3Cl₂ -> 2PCl₃ (Phosphorus Trichloride) - Exothermic",
            "K": "2K + Cl₂ -> 2KCl (Potassium Chloride) - Exothermic"
        },
        "Ca": {
            "O": "2Ca + O₂ -> 2CaO (Calcium Oxide) - Exothermic",
            "Cl": "Ca + Cl₂ -> CaCl₂ (Calcium Chloride) - Exothermic",
            "S": "Ca + S -> CaS (Calcium Sulfide) - Exothermic"
        },
        "Fe": {
            "O": "4Fe + 3O₂ -> 2Fe₂O₃ (Iron Oxide) - Exothermic",
            "S": "Fe + S -> FeS (Iron Sulfide) - Exothermic",
            "Cl": "2Fe + 3Cl₂ -> 2FeCl₃ (Iron Chloride) - Exothermic"
        },
        "S": {
            "O": "O₂ + S -> SO₂ (Sulfur Dioxide) - Exothermic",
            "H": "H₂ + S -> H₂S (Hydrogen Sulfide) - Decomposition",
            "Na": "2Na + S -> Na₂S (Sodium Sulfide) - Exothermic",
            "Fe": "Fe + S -> FeS (Iron Sulfide) - Exothermic"
        },
        "K": {
            "O": "O₂ + K -> KO₂ (Potassium Oxide) - Exothermic",
            "Cl": "2K + Cl₂ -> 2KCl (Potassium Chloride) - Exothermic",
            "S": "2K + S -> K₂S (Potassium Sulfide) - Exothermic"
        },
        "Mg": {
            "O": "2Mg + O₂ -> 2MgO (Magnesium Oxide) - Exothermic",
            "Cl": "Mg + Cl₂ -> MgCl₂ (Magnesium Chloride) - Exothermic",
            "N": "3Mg + N₂ -> Mg₃N₂ (Magnesium Nitride) - Exothermic"
        },
        "Al": {
            "O": "4Al + 3O₂ -> 2Al₂O₃ (Aluminum Oxide) - Exothermic",
            "Cl": "2Al + 3Cl₂ -> 2AlCl₃ (Aluminum Chloride) - Exothermic",
            "S": "2Al + 3S -> Al₂S₃ (Aluminum Sulfide) - Exothermic"
        },
        "P": {
            "O": "4P + 5O₂ -> 2P₂O₅ (Phosphorus Pentoxide) - Exothermic",
            "Cl": "2P + 3Cl₂ -> 2PCl₃ (Phosphorus Trichloride) - Exothermic",
            "N": "4P + 5N₂ -> P₄N₅ (Phosphorus Nitride) - Endothermic"
        },
        "Si": {
            "O": "Si + O₂ -> SiO₂ (Silicon Dioxide) - Exothermic",
            "Cl": "Si + 2Cl₂ -> SiCl₄ (Silicon Tetrachloride) - Exothermic",
            "N": "3Si + 2N₂ -> Si₃N₄ (Silicon Nitride) - Endothermic"
        },
        "F": {
            "H": "H₂ + F₂ -> 2HF (Hydrofluoric Acid) - Exothermic",
            "Na": "2Na + F₂ -> 2NaF (Sodium Fluoride) - Exothermic",
            "Ca": "Ca + F₂ -> CaF₂ (Calcium Fluoride) - Exothermic"
        },
        "He": {
            "O": "No reaction - Helium is an inert gas",
            "H": "No reaction - Helium is an inert gas"
        },
        "Ar": {
            "O": "No reaction - Argon is an inert gas",
            "H": "No reaction - Argon is an inert gas"
        },
        "Zn": {
            "O": "2Zn + O₂ -> 2ZnO (Zinc Oxide) - Exothermic",
            "Cl": "Zn + Cl₂ -> ZnCl₂ (Zinc Chloride) - Exothermic",
            "S": "Zn + S -> ZnS (Zinc Sulfide) - Exothermic"
        },
        "Cu": {
            "O": "2Cu + O₂ -> 2CuO (Copper Oxide) - Exothermic",
            "Cl": "Cu + Cl₂ -> CuCl₂ (Copper Chloride) - Exothermic",
            "S": "Cu + S -> CuS (Copper Sulfide) - Exothermic"
        },
        "Ag": {
            "O": "4Ag + O₂ -> 2Ag₂O (Silver Oxide) - Exothermic",
            "Cl": "Ag + Cl₂ -> AgCl (Silver Chloride) - Exothermic",
            "S": "2Ag + S -> Ag₂S (Silver Sulfide) - Exothermic"
        }
    };

    if (reactions[reactant1] && reactions[reactant1][reactant2]) {
        reaction = reactions[reactant1][reactant2];
    } else if (reactions[reactant2] && reactions[reactant2][reactant1]) {
        reaction = reactions[reactant2][reactant1];
    } else {
        reaction = "No valid reaction for the selected reactants.";
    }

    document.getElementById('resultText').innerHTML = reaction;
}
