function populateThemes(subject) {
    const themaContainer = document.getElementById('themaContainer');
    themaContainer.innerHTML = '';

    let themes = [];
    switch (subject) {
        case 'Aardrijkskunde':
            themes = [
                'Grondsoorten en landschappen',
                'Wonen',
                'Werken',
                'Bestuur',
                'Verkeer',
                'Recreatie',
                'Welvaart',
                'Cultuur en levensbeschouwing'
            ];
            break;
        case 'Geschiedenis':
            themes = [
                'Tijdvak 1: tijd van jagers en boeren (Prehistorie tot 3000 voor Christus)',
                'Tijdvak 2: tijd van Grieken en Romeinen (Oudheid 3000 voor Christus – 500 na Christus)',
                'Tijdvak 3: tijd van monniken en ridders – vroege middeleeuwen (Vroege middeleeuwen 500-1000)',
                'Tijdvak 4: tijd van steden en staten – hoge en late middeleeuwen (Late middeleeuwen 1000-1500)',
                'Tijdvak 5: tijd van ontdekkers en hervormers – renaissance/reformatie (Nieuwe geschiedenis 1500-1600)',
                'Tijdvak 6: tijd van regenten en vorsten – gouden eeuw (Gouden eeuw 1600-1700)',
                'Tijdvak 7: tijd van pruiken en revoluties – verlichting (De verlichting 1700-1800)',
                'Tijdvak 8: tijd van burgers en stoommachines – industrialisatie (De industrialisatie 1800-1900)',
                'Tijdvak 9: tijd van de wereldoorlogen – eerste helft 20ste eeuw (De wereldoorlogen 1900-1950)',
                'Tijdvak 10: tijd van televisie en computer – tweede helft 20ste eeuw (Nieuwste geschiedenis 1950-nu)'

            ];
            break;
        case 'Natuur & Techniek':
            themes = [
                'Planten en dieren in de omgeving',
                'Bouw en functie van organismen',
                'Natuurkundige verschijnselen',
                'Weer en klimaat',
                'Materialen en hun eigenschappen',
                'Technische oplossingen ontwerpen en evalueren',
                'Beweging van de aarde'
            ];
            break;
    }

    themes.forEach((theme, index) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="thema" id="thema${index}" value="${theme}"> ${theme}`;
        themaContainer.appendChild(label);
        themaContainer.appendChild(document.createElement('br'));
    });

    toggleNextButtonForThemes();
}

function populateSubjects(theme) {
    const onderwerpContainer = document.getElementById('onderwerpContainer');
    onderwerpContainer.innerHTML = '';
    
    let subjects = [];
        switch (theme) {
            case 'Grondsoorten en landschappen':
                subjects = [
                    'Vorming en afzetting van grond',
                    'Belangrijkste grondsoorten in Nederland: zeeklei, rivierklei, keileem, zand/löss en veen',
                    'Natuurlandschap vs. cultuurlandschap',
                    'Landschappen in Nederland en hun kenmerken',
                    'Koppeling van landschappen aan grondsoorten',
                    'Aardgas',
                    'Bergen',
                    'Watersnood/Deltawerken',
                    'Ruimte voor de rivier',
                    'Waterkringloop',
                    'Vulkanen',
                    'De aarde en zwaartekracht',
                    'Klimaat'
                ];
                break;
            case 'Wonen':
                subjects = [
                    'Inrichting van eigen huis, straat en wijk',
                    'Verschillen tussen wijken en hun kenmerken',
                    'Bereikbaarheid, voorzieningen, bebouwing en groen in woonwijken'
                ];
                break;
            case 'Werken':
                subjects = [
                    'Werk in de straat, wijk en het buitengebied',
                    'Mijnbouw, industrie en diensten',
                    'Commercieel vs. niet-commercieel werk'
                ];
                break;
            case 'Bestuur':
                subjects = [
                    'Verlichting in de straat',
                    'Openbaar vervoer in de wijk',
                    'Gemeente en buurgemeentes',
                    'Het bestuur'
                ];
                break;
            case 'Verkeer':
                subjects = [
                    'Soorten verkeer en vervoermiddelen',
                    'Verkeersvoorzieningen en infrastructuur',
                    'Auto vs. trein',
                    'Aansluitingen op het weg-, bus- en treinnetwerk',
                    'Duurzaam vervoer en toekomst van mobiliteit'
                ];
                break;
            case 'Recreatie':
                subjects = [
                    'Wandelen, fietsen en de natuur in',
                    'Dagrecreatie en voorzieningen'
                ];
                break;
            case 'Welvaart':
                subjects = [
                    'Welvaart in straat, wijk en stad',
                    'Regionale verschillen en factoren die welvaart beïnvloeden'
                ];
                break;
            case 'Cultuur en levensbeschouwing':
                subjects = [
                    'Huizen en gebouwen in straat, wijk en stad',
                    'Kunstwerken, pleinen en architectuur',
                    'Bouwstijlen, materiaalgebruik en historische perioden',
                    'Gebedshuizen'
                ];
                break;
            case 'Tijdvak 1: tijd van jagers en boeren (Prehistorie tot 3000 voor Christus)':
                subjects = [
                    'Trijntje (± 5500 voor Christus)',
                    'Hunebedden (± 3000 voor Christus)'
                ];
                break;
            case 'Tijdvak 2: tijd van Grieken en Romeinen (Oudheid 3000 voor Christus – 500 na Christus)':
                subjects = [
                    'Romeinse Limes (47 - ± 400)'
                ];
                break;
            case 'Tijdvak 3: tijd van monniken en ridders – vroege middeleeuwen (Vroege middeleeuwen 500-1000)':
                subjects = [
                    'Willibrord (658-739)',
                    'Karel de Grote (742-814)',
                    'Standen: de adel, de kerk en de boeren',
                    'De kerk: monniken, klooster, schrijven',
                    'Ridders: soldaat, heer, maliënkolder'
                ];
                break;
            case 'Tijdvak 4: tijd van steden en staten – hoge en late middeleeuwen (Late middeleeuwen 1000-1500)':
                subjects = [
                    'Hebban olla vogela (± 1100)',
                    'Floris V (1254-1296)',
                    'De Hanze (1356 - ± 1450)',
                    'Jeroen Bosch (± 1450-1516)',
                    'Maria van Bourgondië (1457-1482)'
                ];
                break;
            case 'Tijdvak 5: tijd van ontdekkers en hervormers – renaissance/reformatie/ontdekkingsreizen (Nieuwe geschiedenis 1500-1600)':
                subjects = [
                    'Erasmus (± 1469-1536)',
                    'Karel V (1500-1558)',
                    'De Beeldenstorm (1566)',
                    'Willem van Oranje (1533-1584)',
                    'De Republiek (1588-1795)'
                ];
                break;
            case 'Tijdvak 6: tijd van regenten en vorsten – gouden eeuw (Gouden eeuw 1600-1700)':
                subjects = [
                    'De VOC en WIC (1602-1799)',
                    'De Beemster (1612)',
                    'De grachtengordel (1613-1662)',
                    'Hugo de Groot (1583-1645)',
                    'De Statenbijbel (1637)',
                    'Rembrandt (± 1606-1669)',
                    'De Atlas Maior van Blaeu (1662)',
                    'Michiel de Ruyter (1607-1676)',
                    'Christiaan Huygens (1629-1695)',
                    'Spinoza (1632-1677)',
                    'Slavernij (± 1637-1863)',
                    'Buitenhuizen (17e en 18e eeuw)'
                ];
                break;
            case 'Tijdvak 7: tijd van pruiken en revoluties – verlichting (De verlichting 1700-1800)':
                subjects = [
                    'Eise Eisinga (1744-1828)',
                    'Sara Burgerhart (1782)',
                    'De patriotten (1780-1795)',
                    'Napoleon Bonaparte (1769-1821)'
                ];
                break;
            case 'Tijdvak 8: tijd van burgers en stoommachines – industrialisatie (De industrialisatie 1800-1900)':
                subjects = [
                    'Koning Willem I (1772-1843)',
                    'De eerste spoorlijn (1839)',
                    'De Grondwet (1848)',
                    'Max Havelaar (1860)',
                    'Verzet tegen kinderarbeid (19e eeuw)',
                    'Vincent van Gogh (1853-1890)',
                    'Aletta Jacobs (1854-1929)'
                ];
                break;
            case 'Tijdvak 9: tijd van de wereldoorlogen – eerste helft 20ste eeuw (De wereldoorlogen 1900-1950)':
                subjects = [
                    'De Eerste Wereldoorlog (1914-1918)',
                    'Anton de Kom (1898-1945)',
                    'De Stijl (1917-1931)',
                    'De crisisjaren (1929-1940)',
                    'De Tweede Wereldoorlog (1940-1945)',
                    'Anne Frank (1929-1945)',
                    'Indonesië (1945-1949)'
                ];
                break;
            case 'Tijdvak 10: tijd van televisie en computer – tweede helft 20ste eeuw (Nieuwste geschiedenis 1950-nu)':
                subjects = [
                    'Willem Drees (1886-1988)',
                    'De watersnood (1953)',
                    'De televisie (vanaf 1948)',
                    'Haven van Rotterdam (vanaf ± 1880)',
                    'Marga Klompé (1912-1986)',
                    'De gastarbeiders (vanaf 1960)',
                    'Annie M.G. Schmidt (1911-1995)',
                    'Suriname en de Nederlandse Antillen (vanaf 1945)',
                    'Srebrenica (1995)',
                    'Veelkleurig Nederland (vanaf 1945)',
                    'De gasbel (1959-2030?)',
                    'Europa (vanaf 1945)',
                    'Het Oranjegevoel (vanaf 1974)'
                ];
                break;
            case 'Planten en dieren in de omgeving':
                subjects = [
                    'Veelvoorkomende planten en dieren herkennen en benoemen',
                    'Relaties tussen dieren, planten en hun leefomgeving'
                ];
                break;
            case 'Bouw en functie van organismen':
                subjects = [
                    'Onderdelen van planten en hun functie',
                    'Bouw van dieren en hun aanpassingen',
                    'Het menselijk lichaam en zijn functies'
                ];
                break;
            case 'Natuurkundige verschijnselen':
                subjects = [
                    'Licht en schaduw',
                    'Geluid en trillingen',
                    'Elektriciteit',
                    'Magnetisme',
                    'Krachten (duwen, trekken en zwaartekracht)',
                    'Temperatuur en warmteoverdracht'
                ];
                break;
            case 'Weer en klimaat':
                subjects = [
                    'Temperatuur, neerslag en wind',
                    'Verschillen tussen weer en klimaat',
                    'Invloed van klimaat op landschap en leefomgeving',
                    'Klimaatgebieden'
                ];
                break;
            case 'Materialen en hun eigenschappen':
                subjects = [
                    'Verband tussen materiaal, vorm en functie',
                    'Gebruik van materialen in producten',
                    'Duurzaam en recycling'
                ];
                break;
            case 'Technische oplossingen ontwerpen en evalueren':
                subjects = [
                    'Problemen oplossen met techniek',
                    'Werking van apparaten begrijpen',
                    'Bouw, testen en verbeteren van ontwerpen'
                ];
                break;
            case 'Beweging van de aarde':
                subjects = [
                    'Dag en nacht',
                    'De seizoenen',
                    'Invloed van de zon op de aarde'
                ];
                break;
        }
    
    subjects.forEach((subject, index) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox" name="onderwerp" id="onderwerp${index}" value="${subject}"> ${subject}`;
        onderwerpContainer.appendChild(label);
        onderwerpContainer.appendChild(document.createElement('br'));
    });
    
    // "Anders... checkbox"
    const andersLabel = document.createElement('label');
    andersLabel.innerHTML = `<input type="checkbox" id="onderwerpAnders"> Anders...`;
    onderwerpContainer.appendChild(andersLabel);
    
    const andersInput = document.createElement('input');
    andersInput.type = 'text';
    andersInput.id = 'onderwerpAndersInput';
    andersInput.maxLength = 100;
    andersInput.placeholder = 'Vul je eigen onderwerp in...';
    andersInput.style.display = 'none';
    andersInput.classList.add('anders-input');
    onderwerpContainer.appendChild(andersInput);
    
    document.getElementById('onderwerpAnders').addEventListener('change', function () {
        andersInput.style.display = this.checked ? 'block' : 'none';
        if (this.checked) {
            onderwerpContainer.scrollTop = onderwerpContainer.scrollHeight;
        }
    });
    
    toggleNextButtonForSubjects();
    }