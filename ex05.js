function accesSalle(estMembre, aInvitation, estBanni) {
    const estMembre = true
    const aInvitation = true
    const estBanni = false
    return accesSalle(estMembre, aInvitation, estBanni)
    console.log
}

accesSalle(true, false, false); // true
accesSalle(false, true, false); // true
accesSalle(true, true, true); // false
