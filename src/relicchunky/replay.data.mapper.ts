import { MapData } from '../types/internal.types';

export abstract class ReplayDataMapper {

    public static translateMapData(
        mapPath: string,
        mapData: MapData
    ): MapData {
        let fileName = mapPath.substr(mapPath.lastIndexOf('\\') + 1).toLowerCase();

        switch (fileName) {
            case '2p_abandon_all_hope':
                mapData.name = 'Abandon all hope';
                mapData.url = 'http://i.imgur.com/Q54Oi9L.jpg';
                break;
            case '2p_absolute_zero':
                mapData.name = 'Absolute zero';
                mapData.url = 'http://i.imgur.com/b7yNS4t.jpg';
                break;
            case '2p_battle_marshes':
                mapData.name = 'Battle marshes';
                mapData.url = 'http://i.imgur.com/VjbQkAc.jpg';
                break;
            case '2p_blood_river':
                mapData.name = 'Blood river';
                mapData.url = 'http://i.imgur.com/w9mLoM1.jpg';
                break;
            case '2p_bloody hell':
                mapData.name = 'Bloody hell';
                mapData.url = 'http://i.imgur.com/Mnevd6N.jpg';
                break;
            case '2p_deadmans_crossing':
                mapData.name = 'Deadmans crossing';
                mapData.url = 'http://i.imgur.com/IDmr7Qk.jpg';
                break;
            case '2p_edemus_gamble':
                mapData.name = 'Edemus gamble';
                mapData.url = 'http://i.imgur.com/skZWEz6.jpg';
                break;
            case '2p_eden':
                mapData.name = 'Eden';
                mapData.url = 'http://i.imgur.com/KgIBwtI.jpg';
                break;
            case '2p_emerald_river':
                mapData.name = 'Emerald river';
                mapData.url = 'http://i.imgur.com/7QmJ5eR.jpg';
                break;
            case '2p_emperors_valley':
                mapData.name = 'Emperors valley';
                mapData.url = 'http://i.imgur.com/E0F6sfW.jpg';
                break;
            case '2p_faceoff':
                mapData.name = 'Faceoff';
                mapData.url = 'http://i.imgur.com/9VOvDBU.jpg';
                break;
            case '2p_fallen_city':
                mapData.name = 'Fallen city';
                mapData.url = 'http://i.imgur.com/sl52R9k.jpg';
                break;
            case '2p_fata_morgana':
                mapData.name = 'Fata morgana';
                mapData.url = 'http://i.imgur.com/7OVdvHc.jpg';
                break;
            case '2p_fear':
                mapData.name = 'Fear';
                mapData.url = 'http://i.imgur.com/S0a5cqv.jpg';
                break;
            case '2p_frostbite_river':
                mapData.name = 'Frostbite river';
                mapData.url = 'http://i.imgur.com/MVpl1X8.jpg';
                break;
            case '2p_haines_demise':
                mapData.name = 'Haines demise';
                mapData.url = 'http://i.imgur.com/Igq1dTA.jpg';
                break;
            case '2p_hellfire_canyon':
                mapData.name = 'Hellfire canyon';
                mapData.url = 'http://i.imgur.com/kvV8JlO.jpg';
                break;
            case '2p_meeting_of_minds':
                mapData.name = 'Meeting of minds';
                mapData.url = 'http://i.imgur.com/GnW77zv.jpg';
                break;
            case '2P_meltdown':
                mapData.name = 'Meltdown';
                mapData.url = 'http://i.imgur.com/BhApQpQ.jpg';
                break;
            case '2p_outer_reaches':
                mapData.name = 'Outer reaches';
                mapData.url = 'http://i.imgur.com/GtzLVgI.jpg';
                break;
            case '2p_outpost':
                mapData.name = 'Outpost';
                mapData.url = 'http://i.imgur.com/Tq35UwQ.jpg';
                break;
            case '2p_railway':
                mapData.name = 'Railway';
                mapData.url = 'http://i.imgur.com/PDSEzCV.jpg';
                break;
            case '2p_river_bed':
                mapData.name = 'River bed';
                mapData.url = 'http://i.imgur.com/m2ZeVW4.jpg';
                break;
            case '2p_shrine_of_excellion':
                mapData.name = 'Shrine of excellion';
                mapData.url = 'http://i.imgur.com/md5TKwk.jpg';
                break;
            case '2p_Subterranean_Struggle':
                mapData.name = 'Subterranean struggle';
                mapData.url = 'http://i.imgur.com/D7mxaHH.jpg';
                break;
            case '2p_tainted_pair':
                mapData.name = 'Tainted pair';
                mapData.url = 'http://i.imgur.com/azlXVG2.jpg';
                break;
            case '2p_tazins_folly':
                mapData.name = 'Tazins folly';
                mapData.url = 'http://i.imgur.com/ZgklAmj.jpg';
                break;
            case '2p_titan_fall':
                mapData.name = 'Titan fall';
                mapData.url = 'http://i.imgur.com/vxxo5sR.jpg';
                break;
            case '2p_tranquilitys_end_pro':
                mapData.name = 'Tranquilitys end pro';
                mapData.url = 'http://i.imgur.com/wI0ByhV.jpg';
                break;
            case '2p_valley_of_khorne':
                mapData.name = 'Valley of khorne';
                mapData.url = 'http://i.imgur.com/ygZ3QY8.jpg';
                break;
            case '4p_ariel_highlands':
                mapData.name = 'Ariel highlands';
                mapData.url = 'http://i.imgur.com/CqbUnqH.jpg';
                break;
            case '4p_biffys_peril':
                mapData.name = 'Biffys peril';
                mapData.url = 'http://i.imgur.com/9vhtDnk.jpg';
                break;
            case '4p_doom_spiral':
                mapData.name = 'Doom spiral';
                mapData.url = 'http://i.imgur.com/dP7yVx0.jpg';
                break;
            case '4p_dread_peak':
                mapData.name = 'Dread peak';
                mapData.url = 'http://i.imgur.com/SasHt6k.jpg';
                break;
            case '4p_eres_badlands':
                mapData.name = 'Eres badlands';
                mapData.url = 'http://i.imgur.com/iIZ0vNG.jpg';
                break;
            case '4p_gorhael_crater':
                mapData.name = 'Gorhael crater';
                mapData.url = 'http://i.imgur.com/VTOyCYS.jpg';
                break;
            case '4p_ice_flow':
                mapData.name = 'Ice flow';
                mapData.url = 'http://i.imgur.com/NS0ULOH.jpg';
                break;
            case '4p_into_the_breach':
                mapData.name = 'Into the breach';
                mapData.url = 'http://i.imgur.com/eSDsYYM.jpg';
                break;
            case '4p_janus_savannah':
                mapData.name = 'Janus savannah';
                mapData.url = 'http://i.imgur.com/l1VUnwv.jpg';
                break;
            case '4p_mountain_trail':
                mapData.name = 'Mountain trail';
                mapData.url = 'http://i.imgur.com/STlIkRM.jpg';
                break;
            case '4p_murad_swamplands':
                mapData.name = 'Murad swamplands';
                mapData.url = 'http://i.imgur.com/7PYEW4a.jpg';
                break;
            case '4p_panrea_lowlands':
                mapData.name = 'Panrea lowlands';
                mapData.url = 'http://i.imgur.com/V3IDzN0.jpg';
                break;
            case '4p_quatra':
                mapData.name = 'Quatra';
                mapData.url = 'http://i.imgur.com/ASrd37R.jpg';
                break;
            case '4p_saints_square':
                mapData.name = 'Saints square';
                mapData.url = 'http://i.imgur.com/LNsmuYH.jpg';
                break;
            case '4p_tainted_soul':
                mapData.name = 'Tainted soul';
                mapData.url = 'http://i.imgur.com/MtTGJF8.jpg';
                break;
            case '4p_tartarus_center':
                mapData.name = 'Tartarus center';
                mapData.url = 'http://i.imgur.com/Ns93kjD.jpg';
                break;
            case '4p_tiboraxx':
                mapData.name = 'Tiboraxx';
                mapData.url = 'http://i.imgur.com/yAMYKVQ.jpg';
                break;
            case '4p_torrents':
                mapData.name = 'Torrents';
                mapData.url = 'http://i.imgur.com/Ae9vCjF.jpg';
                break;
            case '4p_van_de_mar_mountains':
                mapData.name = 'Van de mar mountains';
                mapData.url = 'http://i.imgur.com/UHlj01k.jpg';
                break;
            case '4p_volcanic reaction':
                mapData.name = 'Volcanic reaction';
                mapData.url = 'http://i.imgur.com/rB4jnWm.jpg';
                break;
            case '6p_agamar_desert':
                mapData.name = 'Agamar desert';
                mapData.url = 'http://i.imgur.com/Eavt2cJ.jpg';
                break;
            case '6p_alvarus':
                mapData.name = 'Alvarus';
                mapData.url = 'http://i.imgur.com/uiXdPHV.jpg';
                break;
            case '6p_bloodshed_alley':
                mapData.name = 'Bloodshed alley';
                mapData.url = 'http://i.imgur.com/9jl1S1o.jpg';
                break;
            case '6p_crossroads':
                mapData.name = 'Crossroads';
                mapData.url = 'http://i.imgur.com/zuWAHcC.jpg';
                break;
            case '6p_crozius_arcanum':
                mapData.name = 'Crozius arcanum';
                mapData.url = 'http://i.imgur.com/zGPT2yD.jpg';
                break;
            case '6p_dread_alley':
                mapData.name = 'Dread alley';
                mapData.url = 'http://i.imgur.com/7PSDOG1.jpg';
                break;
            case '6p_fury_island':
                mapData.name = 'Fury island';
                mapData.url = 'http://i.imgur.com/bTyRzdY.jpg';
                break;
            case '6p_hyperion_peaks':
                mapData.name = 'Hyperion peaks';
                mapData.url = 'http://i.imgur.com/AlIdr0Q.jpg';
                break;
            case '6p_jungle_walls':
                mapData.name = 'Jungle walls';
                mapData.url = 'http://i.imgur.com/Vhr1oci.jpg';
                break;
            case '6p_kasyr_lutien':
                mapData.name = 'Kasyr lutien';
                mapData.url = 'http://i.imgur.com/SadrDe4.jpg';
                break;
            case '6p_mortalis':
                mapData.name = 'Mortalis';
                mapData.url = 'http://i.imgur.com/THKW2yA.jpg';
                break;
            case '6p_orestan_plains':
                mapData.name = 'Orestan plains';
                mapData.url = 'http://i.imgur.com/p5I2G45.jpg';
                break;
            case '6p_pavonian_heartland':
                mapData.name = 'Pavonian heartland';
                mapData.url = 'http://i.imgur.com/j8LtM56.jpg';
                break;
            case '6p_pavonis':
                mapData.name = 'Pavonis';
                mapData.url = 'http://i.imgur.com/U4UNIv7.jpg';
                break;
            case '6p_paynes_retribution':
                mapData.name = 'Paynes retribution';
                mapData.url = 'http://i.imgur.com/AZIgo5O.jpg';
                break;
            case '6p_rhean_floodlands':
                mapData.name = 'Rhean floodlands';
                mapData.url = 'http://i.imgur.com/7UQoLwB.jpg';
                break;
            case '6p_testing_grounds':
                mapData.name = 'Testing grounds';
                mapData.url = 'http://i.imgur.com/OyUdChT.jpg';
                break;
            case '6p_thargorum':
                mapData.name = 'Thargorum';
                mapData.url = 'http://i.imgur.com/4miCKRS.jpg';
                break;
            case '6p_vandea_coast':
                mapData.name = 'Vandea coast';
                mapData.url = 'http://i.imgur.com/Jm0P48u.jpg';
                break;
            case '6p_western_barrens':
                mapData.name = 'Western barrens';
                mapData.url = 'http://i.imgur.com/kE0unqr.jpg';
                break;
            case '6pteam_streets_of_vogen':
                mapData.name = 'Streets of vogen';
                mapData.url = 'http://i.imgur.com/xCokQBQ.jpg';
                break;
            case '8p_burial_grounds':
                mapData.name = 'Burial grounds';
                mapData.url = 'http://i.imgur.com/oskjGwd.jpg';
                break;
            case '8p_daturias_pits':
                mapData.name = 'Daturias pits';
                mapData.url = 'http://i.imgur.com/Q0hLmCf.jpg';
                break;
            case '8p_demes_northlands':
                mapData.name = 'Demes northlands';
                mapData.url = 'http://i.imgur.com/5wYfPhW.jpg';
                break;
            case '8p_doom_chamber':
                mapData.name = 'Doom chamber';
                mapData.url = 'http://i.imgur.com/v7ZLdod.jpg';
                break;
            case '8p_forbidden_jungle':
                mapData.name = 'Forbidden jungle';
                mapData.url = 'http://i.imgur.com/B9pLyOQ.jpg';
                break;
            case '8p_lost_hope':
                mapData.name = 'Lost hope';
                mapData.url = 'http://i.imgur.com/nFcZ9vs.jpg';
                break;
            case '8p_morriah_coast':
                mapData.name = 'Morriah coast';
                mapData.url = 'http://i.imgur.com/RyklFlb.jpg';
                break;
            case '8p_oasis_of_sharr':
                mapData.name = 'Oasis of sharr';
                mapData.url = 'http://i.imgur.com/sxEy6ma.jpg';
                break;
            case '8p_penal_colony':
                mapData.name = 'Penal colony';
                mapData.url = 'http://i.imgur.com/O5etsV7.jpg';
                break;
            case '8p_rhean_jungle':
                mapData.name = 'Rhean jungle';
                mapData.url = 'http://i.imgur.com/wxg5bwe.jpg';
                break;
            case '8p_thurabis_plateau':
                mapData.name = 'Thurabis plateau';
                mapData.url = 'http://i.imgur.com/vtw5L6R.jpg';
                break;
            case 'antiga bay (2) v10':
                mapData.name = 'Antiga bay (2) v10';
                mapData.url = 'http://i.imgur.com/KSKD9HH.jpg';
                break;
            case 'diceyambush':
                mapData.name = 'Dicey ambush';
                mapData.url = 'http://i.imgur.com/I9y3JcM.jpg';
                break;
            case 'galenas crusade (2) v10':
                mapData.name = 'Galenas crusade (2) v10';
                mapData.url = 'http://i.imgur.com/EFLScl4.jpg';
                break;
            case 'jungle morning(2)v2-6':
                mapData.name = 'Jungle morning (2) v2-6';
                mapData.url = 'http://i.imgur.com/fau9fkK.jpg';
                break;
            case 'pro_2p_quests_triumph':
                mapData.name = 'Quests triumph pro';
                mapData.url = 'http://i.imgur.com/KaLHsN1.jpg';
                break;
            case 'sands of time (2) v10':
                mapData.name = 'Sands of time (2) v10';
                mapData.url = 'http://i.imgur.com/oPrnD2c.jpg';
                break;
            case 'short below zero (2) v14':
                mapData.name = 'Short below zero (2) v14';
                mapData.url = 'http://i.imgur.com/IeOZHWW.jpg';
                break;
            case '2p_belltower':
                mapData.name = 'Belltower';
                mapData.url = 'http://i.imgur.com/98jT54t.jpg';
                break;
            case '2p_blood_river_remix':
                mapData.name = 'Blood river remix (Hype version)';
                mapData.url = 'http://i.imgur.com/1X4EQpL.jpg';
                break;
            case '2p_light_brigade':
                mapData.name = 'Light brigade';
                mapData.url = 'http://i.imgur.com/yBEvs7R.jpg';
                break;
            case '2p_fraziersdemise':
                mapData.name = 'Fraziers demise';
                mapData.url = 'http://i.imgur.com/BhgChRF.jpg';
                break;
            case '2p_meeting_of_minds_pro_lis_v1':
                mapData.name = 'Meeting of minds pro';
                mapData.url = 'http://i.imgur.com/HKUE0ao.jpg';
                break;
            case '2p_outer_reaches_remix':
                mapData.name = 'Outer reaches remix (Hype version)';
                mapData.url = 'http://i.imgur.com/TLLlV7l.jpg';
                break;
            case '2p_refinery':
                mapData.name = 'Refinery';
                mapData.url = 'http://i.imgur.com/sFlILVy.jpg';
                break;
            case '2p_moonbase_mm':
                mapData.name = 'Moon Base';
                mapData.url = 'https://i.imgur.com/inAb8LI.jpg';
                break;
            case '2p_Minos_Bridge_mm_custom':
                mapData.name = 'Minos Bridge';
                mapData.url = 'https://i.imgur.com/mN0UN9l.jpg';
                break;
            case '2p_outpost_mm':
                mapData.name = 'Outpost';
                mapData.url = 'https://i.imgur.com/xZAVSf2.jpg';
                break;
            default:
                mapData.name = '';
                mapData.url = '';
                break;
        }

        return mapData;
    }

    public static mapRace(
        raceIdentifier: string
    ): string {

        switch (raceIdentifier) {
            case 'chaos_marine_race': return 'Chaos';
            case 'eldar_race': return 'Eldar';
            case 'ork_race': return 'Orks';
            case 'space_marine_race': return 'Space marines';

            case 'guard_race': return 'Imperial guard';

            case 'necron_race': return 'Necrons';
            case 'tau_race': return 'Tau';

            case 'sisters_race': return 'Sisters of battle';
            case 'dark_eldar_race': return 'Dark Eldar';
            default: return '';
        }
    }
}