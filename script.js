$("document").ready(function () {
    // declare variables
    let profilesContainer = $(".leaderboard__profiles");

    // make an ajax call
    $.get("list.json", function(data){
        data.forEach(profile => {
            let {soapName , soapPrice} = profile ;
            let html = `<article class="leaderboard__profile">
            <span class="leaderboard__name">${soapName}</span>
            <span class="leaderboard__value">${soapPrice}<span>$</span></span>
          </article>` ;
          $(profilesContainer).append(html)
        });
    })


})