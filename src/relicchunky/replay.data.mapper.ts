import { MapData } from '../types/internal.types'

export abstract class ReplayDataMapper {

    public static getMapDetails(
        internalName: string
    ): Array<string> {

        switch (internalName) {
            case '2p_abandon_all_hope':
                return [
                    'Abandon all hope',
                    'http://i.imgur.com/Q54Oi9L.jpg'
                ];
            case '2p_absolute_zero':
                return [
                    'Absolute zero',
                    'http://i.imgur.com/b7yNS4t.jpg'
                ];
            case '2p_battle_marshes':
                return [
                    'Battle marshes',
                    'http://i.imgur.com/VjbQkAc.jpg'
                ];
            case '2p_blood_river':
                return [
                    'Blood river',
                    'http://i.imgur.com/w9mLoM1.jpg'
                ];
            case '2p_bloody hell':
                return [
                    'Bloody hell',
                    'http://i.imgur.com/Mnevd6N.jpg'
                ];
            case '2p_deadmans_crossing':
                return [
                    'Deadmans crossing',
                    'http://i.imgur.com/IDmr7Qk.jpg'
                ];
            case '2p_edemus_gamble':
                return [
                    'Edemus gamble',
                    'http://i.imgur.com/skZWEz6.jpg'
                ];
            case '2p_eden':
                return [
                    'Eden',
                    'http://i.imgur.com/KgIBwtI.jpg'
                ];
            case '2p_emerald_river':
                return [
                    'Emerald river',
                    'http://i.imgur.com/7QmJ5eR.jpg'
                ];
            case '2p_emperors_valley':
                return [
                    'Emperors valley',
                    'http://i.imgur.com/E0F6sfW.jpg'
                ];
            case '2p_faceoff':
                return [
                    'Faceoff',
                    'http://i.imgur.com/9VOvDBU.jpg'
                ];
            case '2p_fallen_city':
                return [
                    'Fallen city',
                    'http://i.imgur.com/sl52R9k.jpg'
                ];
            case '2p_fata_morgana':
                return [
                    'Fata morgana',
                    'http://i.imgur.com/7OVdvHc.jpg'
                ];
            case '2p_fear':
                return [
                    'Fear',
                    'http://i.imgur.com/S0a5cqv.jpg'
                ];
            case '2p_frostbite_river':
                return [
                    'Frostbite river',
                    'http://i.imgur.com/MVpl1X8.jpg'
                ];
            case '2p_haines_demise':
                return [
                    'Haines demise',
                    'http://i.imgur.com/Igq1dTA.jpg'
                ];
            case '2p_hellfire_canyon':
                return [
                    'Hellfire canyon',
                    'http://i.imgur.com/kvV8JlO.jpg'
                ];
            case '2p_meeting_of_minds':
                return [
                    'Meeting of minds',
                    'http://i.imgur.com/GnW77zv.jpg'
                ];
            case '2p_meltdown':
                return [
                    'Meltdown',
                    'http://i.imgur.com/BhApQpQ.jpg'
                ];
            case '2p_outer_reaches':
                return [
                    'Outer reaches',
                    'http://i.imgur.com/GtzLVgI.jpg'
                ];
            case '2p_outpost':
                return [
                    'Outpost',
                    'http://i.imgur.com/Tq35UwQ.jpg'
                ];
            case '2p_railway':
                return [
                    'Railway',
                    'http://i.imgur.com/PDSEzCV.jpg'
                ];
            case '2p_river_bed':
                return [
                    'River bed',
                    'http://i.imgur.com/m2ZeVW4.jpg'
                ];
            case '2p_shrine_of_excellion':
                return [
                    'Shrine of excellion',
                    'http://i.imgur.com/md5TKwk.jpg'
                ];
            case '2p_subterranean_struggle':
                return [
                    'Subterranean struggle',
                    'http://i.imgur.com/D7mxaHH.jpg'
                ];
            case '2p_tainted_pair':
                return [
                    'Tainted pair',
                    'http://i.imgur.com/azlXVG2.jpg'
                ];
            case '2p_tazins_folly':
                return [
                    'Tazins folly',
                    'http://i.imgur.com/ZgklAmj.jpg'
                ];
            case '2p_titan_fall':
                return [
                    'Titan fall',
                    'http://i.imgur.com/vxxo5sR.jpg'
                ];
            case '2p_tranquilitys_end_pro':
                return [
                    'Tranquilitys end pro',
                    'http://i.imgur.com/wI0ByhV.jpg'
                ];
            case '2p_valley_of_khorne':
                return [
                    'Valley of khorne',
                    'http://i.imgur.com/ygZ3QY8.jpg'
                ];
            case '4p_ariel_highlands':
                return [
                    'Ariel highlands',
                    'http://i.imgur.com/CqbUnqH.jpg'
                ];
            case '4p_biffys_peril':
                return [
                    'Biffys peril',
                    'http://i.imgur.com/9vhtDnk.jpg'
                ];
            case '4p_doom_spiral':
                return [
                    'Doom spiral',
                    'http://i.imgur.com/dP7yVx0.jpg'
                ];
            case '4p_dread_peak':
                return [
                    'Dread peak',
                    'http://i.imgur.com/SasHt6k.jpg'
                ];
            case '4p_eres_badlands':
                return [
                    'Eres badlands',
                    'http://i.imgur.com/iIZ0vNG.jpg'
                ];
            case '4p_gorhael_crater':
                return [
                    'Gorhael crater',
                    'http://i.imgur.com/VTOyCYS.jpg'
                ];
            case '4p_ice_flow':
                return [
                    'Ice flow',
                    'http://i.imgur.com/NS0ULOH.jpg'
                ];
            case '4p_into_the_breach':
                return [
                    'Into the breach',
                    'http://i.imgur.com/eSDsYYM.jpg'
                ];
            case '4p_janus_savannah':
                return [
                    'Janus savannah',
                    'http://i.imgur.com/l1VUnwv.jpg'
                ];
            case '4p_mountain_trail':
                return [
                    'Mountain trail',
                    'http://i.imgur.com/STlIkRM.jpg'
                ];
            case '4p_murad_swamplands':
                return [
                    'Murad swamplands',
                    'http://i.imgur.com/7PYEW4a.jpg'
                ];
            case '4p_panrea_lowlands':
                return [
                    'Panrea lowlands',
                    'http://i.imgur.com/V3IDzN0.jpg'
                ];
            case '4p_quatra':
                return [
                    'Quatra',
                    'http://i.imgur.com/ASrd37R.jpg'
                ];
            case '4p_saints_square':
                return [
                    'Saints square',
                    'http://i.imgur.com/LNsmuYH.jpg'
                ];
            case '4p_tainted_soul':
                return [
                    'Tainted soul',
                    'http://i.imgur.com/MtTGJF8.jpg'
                ];
            case '4p_tartarus_center':
                return [
                    'Tartarus center',
                    'http://i.imgur.com/Ns93kjD.jpg'
                ];
            case '4p_tiboraxx':
                return [
                    'Tiboraxx',
                    'http://i.imgur.com/yAMYKVQ.jpg'
                ];
            case '2p_tiboraxx':
                return [
                    'Tiboraxx',
                    'https://i.imgur.com/vUsaLxE.jpg'
                ];
            case '4p_torrents':
                return [
                    'Torrents',
                    'http://i.imgur.com/Ae9vCjF.jpg'
                ];
            case '4p_van_de_mar_mountains':
                return [
                    'Van de mar mountains',
                    'http://i.imgur.com/UHlj01k.jpg'
                ];
            case '4p_volcanic reaction':
                return [
                    'Volcanic reaction',
                    'http://i.imgur.com/rB4jnWm.jpg'
                ];
            case '6p_agamar_desert':
                return [
                    'Agamar desert',
                    'http://i.imgur.com/Eavt2cJ.jpg'
                ];
            case '6p_alvarus':
                return [
                    'Alvarus',
                    'http://i.imgur.com/uiXdPHV.jpg'
                ];
            case '6p_bloodshed_alley':
                return [
                    'Bloodshed alley',
                    'http://i.imgur.com/9jl1S1o.jpg'
                ];
            case '6p_crossroads':
                return [
                    'Crossroads',
                    'http://i.imgur.com/zuWAHcC.jpg'
                ];
            case '6p_crozius_arcanum':
                return [
                    'Crozius arcanum',
                    'http://i.imgur.com/zGPT2yD.jpg'
                ];
            case '6p_dread_alley':
                return [
                    'Dread alley',
                    'http://i.imgur.com/7PSDOG1.jpg'
                ];
            case '6p_fury_island':
                return [
                    'Fury island',
                    'http://i.imgur.com/bTyRzdY.jpg'
                ];
            case '6p_hyperion_peaks':
                return [
                    'Hyperion peaks',
                    'http://i.imgur.com/AlIdr0Q.jpg'
                ];
            case '6p_jungle_walls':
                return [
                    'Jungle walls',
                    'http://i.imgur.com/Vhr1oci.jpg'
                ];
            case '6p_kasyr_lutien':
                return [
                    'Kasyr lutien',
                    'http://i.imgur.com/SadrDe4.jpg'
                ];
            case '6p_mortalis':
                return [
                    'Mortalis',
                    'http://i.imgur.com/THKW2yA.jpg'
                ];
            case '6p_orestan_plains':
                return [
                    'Orestan plains',
                    'http://i.imgur.com/p5I2G45.jpg'
                ];
            case '6p_pavonian_heartland':
                return [
                    'Pavonian heartland',
                    'http://i.imgur.com/j8LtM56.jpg'
                ];
            case '6p_pavonis':
                return [
                    'Pavonis',
                    'http://i.imgur.com/U4UNIv7.jpg'
                ];
            case '6p_paynes_retribution':
                return [
                    'Paynes retribution',
                    'http://i.imgur.com/AZIgo5O.jpg'
                ];
            case '6p_rhean_floodlands':
                return [
                    'Rhean floodlands',
                    'http://i.imgur.com/7UQoLwB.jpg'
                ];
            case '6p_testing_grounds':
                return [
                    'Testing grounds',
                    'http://i.imgur.com/OyUdChT.jpg'
                ];
            case '6p_thargorum':
                return [
                    'Thargorum',
                    'http://i.imgur.com/4miCKRS.jpg'
                ];
            case '6p_vandea_coast':
                return [
                    'Vandea coast',
                    'http://i.imgur.com/Jm0P48u.jpg'
                ];
            case '6p_western_barrens':
                return [
                    'Western barrens',
                    'http://i.imgur.com/kE0unqr.jpg'
                ];
            case '6pteam_streets_of_vogen':
                return [
                    'Streets of vogen',
                    'http://i.imgur.com/xCokQBQ.jpg'
                ];
            case '8p_burial_grounds':
                return [
                    'Burial grounds',
                    'http://i.imgur.com/oskjGwd.jpg'
                ];
            case '8p_daturias_pits':
                return [
                    'Daturias pits',
                    'http://i.imgur.com/Q0hLmCf.jpg'
                ];
            case '8p_demes_northlands':
                return [
                    'Demes northlands',
                    'http://i.imgur.com/5wYfPhW.jpg'
                ];
            case '8p_doom_chamber':
                return [
                    'Doom chamber',
                    'http://i.imgur.com/v7ZLdod.jpg'
                ];
            case '8p_forbidden_jungle':
                return [
                    'Forbidden jungle',
                    'http://i.imgur.com/B9pLyOQ.jpg'
                ];
            case '8p_lost_hope':
                return [
                    'Lost hope',
                    'http://i.imgur.com/nFcZ9vs.jpg'
                ];
            case '8p_morriah_coast':
                return [
                    'Morriah coast',
                    'http://i.imgur.com/RyklFlb.jpg'
                ];
            case '8p_oasis_of_sharr':
                return [
                    'Oasis of sharr',
                    'http://i.imgur.com/sxEy6ma.jpg'
                ];
            case '8p_penal_colony':
                return [
                    'Penal colony',
                    'http://i.imgur.com/O5etsV7.jpg'
                ];
            case '8p_rhean_jungle':
                return [
                    'Rhean jungle',
                    'http://i.imgur.com/wxg5bwe.jpg'
                ];
            case '8p_thurabis_plateau':
                return [
                    'Thurabis plateau',
                    'http://i.imgur.com/vtw5L6R.jpg'
                ];
            case 'antiga bay (2) v10':
                return [
                    'Antiga bay (2) v10',
                    'http://i.imgur.com/KSKD9HH.jpg'
                ];
            case 'diceyambush':
                return [
                    'Dicey ambush',
                    'http://i.imgur.com/I9y3JcM.jpg'
                ];
            case 'galenas crusade (2) v10':
                return [
                    'Galenas crusade (2) v10',
                    'http://i.imgur.com/EFLScl4.jpg'
                ];
            case 'jungle morning(2)v2-6':
                return [
                    'Jungle morning (2) v2-6',
                    'http://i.imgur.com/fau9fkK.jpg'
                ];
            case 'pro_2p_quests_triumph':
                return [
                    'Quests triumph pro',
                    'http://i.imgur.com/KaLHsN1.jpg'
                ];
            case 'Sands of time (2) v10':
                return [
                    'Sands of time (2) v10',
                    'http://i.imgur.com/oPrnD2c.jpg'
                ];
            case 'short below zero (2) v14':
                return [
                    'Short below zero (2) v14',
                    'http://i.imgur.com/IeOZHWW.jpg'
                ];
            case '2p_belltower':
                return [
                    'Belltower',
                    'http://i.imgur.com/98jT54t.jpg'
                ];
            case '2p_blood_river_remix':
                return [
                    'Blood river remix (Hype version)',
                    'http://i.imgur.com/1X4EQpL.jpg'
                ];
            case '2p_light_brigade':
                return [
                    'Light brigade',
                    'http://i.imgur.com/yBEvs7R.jpg'
                ];
            case '2p_fraziersdemise':
                return [
                    'Fraziers demise',
                    'http://i.imgur.com/BhgChRF.jpg'
                ];
            case '2p_meeting_of_minds_pro_lis_v1':
                return [
                    'Meeting of minds pro',
                    'http://i.imgur.com/HKUE0ao.jpg'
                ];
            case '2p_outer_reaches_remix':
                return [
                    'Outer reaches remix (Hype version)',
                    'http://i.imgur.com/TLLlV7l.jpg'
                ];
            case '2p_refinery':
                return [
                    'Refinery',
                    'http://i.imgur.com/sFlILVy.jpg'
                ];
            case '2p_moonbase':
                return [
                    'Moon Base',
                    'https://i.imgur.com/inAb8LI.jpg'
                ];
            case '2p_minos bridge':
                return [
                    'Minos Bridge',
                    'https://i.imgur.com/mN0UN9l.jpg'
                ];
            case '2p_outpost_mm':
                return [
                    'Outpost',
                    'https://i.imgur.com/xZAVSf2.jpg'
                ];
            default:
                return [internalName, ''];
        }
    }

    public static translateMapData(
        mapPath: string,
        mapData: MapData
    ): MapData {
        let internalName = mapPath.substr(mapPath.lastIndexOf('\\') + 1).toLowerCase();

        let mapDetails = this.getMapDetails(internalName);

        mapData.name = mapDetails[0];
        mapData.url = mapDetails[1];

        return mapData;
    }

    public static mapRace(
        raceIdentifier: string
    ): string {

        switch (raceIdentifier) {
            case 'chaos_marine_race': return 'Chaos'
            case 'eldar_race': return 'Eldar'
            case 'ork_race': return 'Orks'
            case 'space_marine_race': return 'Space marines'

            case 'guard_race': return 'Imperial guard'

            case 'necron_race': return 'Necrons'
            case 'tau_race': return 'Tau'

            case 'sisters_race': return 'Sisters of battle'
            case 'dark_eldar_race': return 'Dark Eldar'
            default: return ''
        }
    }
}