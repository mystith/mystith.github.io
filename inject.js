setInterval(function () {
    const http = new XMLHttpRequest();
    let url = 'http://localhost.localdomain:8847/';
    var wrinklers = Game.SaveWrinklers();
    let postMessage = JSON.parse(`{
        "game_version": "${Game.version}",
        "run_start": "${Game.startDate}",
        "legacy_start": "${Game.fullDate}",
        "bakery_name": "${Game.bakeryName}",
        "game_seed": "${Game.seed}",
        "cookies": "${Game.cookies}",
        "total_cookies": "${Game.cookiesEarned}",
        "cookie_clicks": "${Game.cookieClick}",
        "golden_cookies": "${Game.goldenClicks}",
        "handmade_cookies": "${Game.handmadeCookies}",
        "missed_golden": "${Game.missedGoldenClicks}",
        "old_cookies": "${Game.cookiesReset}",
        "elder_wrath": "${Game.elderWrath}",
        "pledges": "${Game.pledges}",
        "pledge_left": "${Game.pledgeT}",
        "researching": "${Game.nextResearch}",
        "research_left": "${Game.researchT}",
        "ascensions": "${Game.resets}",
        "golden_cookies_current_run": "${Game.goldenClicksLocal}",
        "total_wrinkler_cookies": "${Game.cookiesSucked}",
        "wrinklers_popped": "${Game.wrinklersPopped}",
        "santa_level": "${Game.santaLevel}",
        "reindeer_clicked": "${Game.reindeerClicked}",
        "season_left": "${Game.seasonT}",
        "season_switches": "${Game.seasonUses}",
        "current_season": "${Game.season}",
        "current_wrinkler_cookies": "${wrinklers.amount}",
        "num_wrinklers": "${wrinklers.number}",
        "num_shinies": "${wrinklers.shinies}",
        "shiny_cookies": "${wrinklers.amountShinies}",
        "prestige_level": "${Game.prestige}",
        "heavenly_chips": "${Game.heavenlyChips}",
        "heavenly_spent": "${Game.heavenlyChipsSpent}",
        "heavenly_cookies": "${Game.heavenlyCookies}",
        "ascension_mode": "${Game.ascensionMode}",
        "perma_one": "${Game.permanentUpgrades[0]}",
        "perma_two": "${Game.permanentUpgrades[1]}",
        "perma_three": "${Game.permanentUpgrades[2]}",
        "perma_four": "${Game.permanentUpgrades[3]}",
        "perma_five": "${Game.permanentUpgrades[4]}",
        "dragon_level": "${Game.dragonLevel}",
        "dragon_aura": "${Game.dragonAura}",
        "dragon_aura_two": "${Game.dragonAura2}",
        "sugar_lumps": "${Game.lumps}",
        "total_lumps": "${Game.lumpsTotal}",
        "lump_start": "${Game.lumpT}",
        "minigame_refill": "${Game.lumpRefill}",
        "lump_type": "${Game.lumpCurrentType}",
        "vault": "${Game.vault.join(',')}",
        "buildings": [],
        "upgrades": [],
        "achievements": [],
        "buffs": []
    }`);

    for(var i = 0; i < Game.Objects.length; i++){
        var obj = Game.Objects[i];
        postMessage.buildings.push(obj);
    }

    for(var i = 0; i < Game.UpgradesById.length; i++){
        var obj = Game.UpgradesById[i];
        postMessage.upgrades.push(obj);
    }

    for(var i = 0; i < Game.AchievementsById.length; i++){
        var obj = Game.AchievementsById[i];
        postMessage.achievements.push(obj);
    }

    for(var i = 0; i < Game.buffs.length; i++){
        var obj = Game.buffs[i];
        postMessage.buffs.push(obj);
    }

    var stringified = JSON.stringify(postMessage);
    
    console.log(stringified);
    
    $.post(url, stringified, function(data) { console.log(data); });
}, 1000);
