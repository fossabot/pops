/** IATA airports location filtered*/
const iata = new Map([
  ["ADL", [-34.938175, 138.53735]],
  ["AKL", [-37.004787, 174.78352]],
  ["ALA", [43.346653, 77.01145]],
  ["AMM", [31.722534, 35.98932]],
  ["AMS", [52.30907, 4.763385]],
  ["ARI", [-18.349766, -70.335556]],
  ["ARN", [59.64982, 17.930365]],
  ["ASU", [-25.241795, -57.513794]],
  ["ATH", [37.93635, 23.946486]],
  ["ATL", [33.640068, -84.44403]],
  ["AVL", [35.43508, -82.537315]],
  ["BAH", [26.26918, 50.62605]],
  ["BAQ", [10.886398, -74.77618]],
  ["BAX", [53.361088, 83.547646]],
  ["BCN", [41.30303, 2.07593]],
  ["BEG", [44.819443, 20.306944]],
  ["BEY", [33.826073, 35.49308]],
  ["BGW", [33.2833, 44.5]],
  ["BKK", [13.693062, 100.752045]],
  ["BLR", [13.198889, 77.70556]],
  ["BMA", [59.35566, 17.94608]],
  ["BNA", [36.13174, -86.668945]],
  ["BNE", [-27.40303, 153.10905]],
  ["BOG", [4.698602, -74.143135]],
  ["BOM", [19.095509, 72.87497]],
  ["BOS", [42.36646, -71.02018]],
  ["BRU", [50.89717, 4.483602]],
  ["BTH", [1.123627, 104.11528]],
  ["BTS", [48.170017, 17.199799]],
  ["BUD", [47.433037, 19.261621]],
  ["BUF", [42.933826, -78.731804]],
  ["BUR", [34.19619, -118.35411]],
  ["BWI", [39.179527, -76.66894]],
  ["BWN", [4.945197, 114.93375]],
  ["CAN", [23.387861, 113.29734]],
  ["CBF", [41.26012, -95.7586]],
  ["CCU", [22.64531, 88.43931]],
  ["CDG", [49.003197, 2.567023]],
  ["CEB", [10.313333, 123.98278]],
  ["CGK", [-6.130643, 106.655525]],
  ["CGO", [34.52752, 113.84024]],
  ["CGP", [22.245201, 91.81516]],
  ["CHI", [41.8831, -87.7661]],
  ["CHS", [32.884354, -80.037155]],
  ["CKG", [29.72034, 106.63408]],
  ["CLE", [41.410854, -81.83821]],
  ["CLT", [35.219166, -80.93584]],
  ["CMB", [7.174112, 79.8865]],
  ["CMH", [39.99818, -82.884964]],
  ["CMN", [33.36667, -7.586667]],
  ["CPH", [55.62905, 12.647601]],
  ["CPM", [33.8888, -118.239]],
  ["CPT", [-33.968906, 18.596489]],
  ["CRK", [15.182571, 120.546486]],
  ["CSX", [28.193336, 113.21459]],
  ["CTU", [30.581135, 103.9568]],
  ["CUR", [12.184615, -68.95706]],
  ["CWB", [-25.5322, -49.176544]],
  ["DAC", [23.848648, 90.405876]],
  ["DAL", [32.84391, -96.85]],
  ["DAR", [-6.873533, 39.20211]],
  ["DCA", [38.853436, -77.04346]],
  ["DEL", [28.556555, 77.10079]],
  ["DEN", [39.84939, -104.672844]],
  ["DFW", [32.89746, -97.036125]],
  ["DKR", [14.744975, -17.490194]],
  ["DLS", [45.6194, -121.165]],
  ["DME", [55.414566, 37.899494]],
  ["DOH", [25.267569, 51.558067]],
  ["DSM", [41.532433, -93.64809]],
  ["DTW", [42.20781, -83.35605]],
  ["DUB", [53.42728, -6.24357]],
  ["DUR", [-29.614445, 31.116388]],
  ["DUS", [51.278328, 6.76558]],
  ["DXB", [25.248665, 55.352917]],
  ["EDI", [55.948143, -3.364177]],
  ["EVN", [40.15272, 44.39805]],
  ["EWR", [40.68907, -74.17876]],
  ["EZE", [-34.81273, -58.539833]],
  ["FCO", [41.794594, 12.250346]],
  ["FJR", [25.109444, 56.330555]],
  ["FLL", [26.071491, -80.144905]],
  ["FOC", [25.93123, 119.66923]],
  ["FOR", [-3.779073, -38.540836]],
  ["FRA", [50.050735, 8.570773]],
  ["FRU", [43.05358, 74.46945]],
  ["FTY", [33.7767, -84.5208]],
  ["FUO", [23.133333, 113.28333]],
  ["GIG", [-22.814653, -43.24651]],
  ["GND", [12.004167, -61.78611]],
  ["GOJ", [56.218613, 43.789764]],
  ["GOT", [57.66664, 12.294878]],
  ["GRQ", [53.120277, 6.575556]],
  ["GRU", [-23.425669, -46.481926]],
  ["GUA", [14.588071, -90.53068]],
  ["GVA", [46.229633, 6.105774]],
  ["GYD", [40.462486, 50.05039]],
  ["HAM", [53.63128, 10.006414]],
  ["HAN", [21.214184, 105.802826]],
  ["HEL", [60.31795, 24.96645]],
  ["HET", [40.854713, 111.814156]],
  ["HGH", [30.236935, 120.43236]],
  ["HHN", [49.948334, 7.264167]],
  ["HHP", [22.2889, 114.152]],
  ["HIO", [45.5418, -122.951]],
  ["HKG", [22.315248, 113.93649]],
  ["HND", [35.54907, 139.78453]],
  ["HNL", [21.325832, -157.92166]],
  ["HNY", [26.85, 112.5]],
  ["HWD", [37.659278, -122.122417]],
  ["HYD", [17.24, 78.428055]],
  ["IAD", [38.95315, -77.44774]],
  ["IAH", [29.983334, -95.34]],
  ["ICN", [37.448524, 126.45123]],
  ["IEV", [50.401943, 30.450832]],
  ["IND", [39.714516, -86.29805]],
  ["ISB", [33.609707, 73.1051]],
  ["IST", [40.976665, 28.815277]],
  ["ITM", [34.790974, 135.44171]],
  ["JAX", [30.491657, -81.68306]],
  ["JFK", [40.642334, -73.78817]],
  ["JHB", [1.638889, 103.67083]],
  ["JIB", [11.552361, 43.149677]],
  ["JNB", [-26.132664, 28.231314]],
  ["JRS", [31.8675, 35.214]],
  ["KBP", [50.341244, 30.895206]],
  ["KEF", [63.997765, -22.624283]],
  ["KGL", [-1.963042, 30.135014]],
  ["KHH", [22.5725, 120.345276]],
  ["KHI", [24.899986, 67.16828]],
  ["KHV", [48.524563, 135.16861]],
  ["KIV", [46.935444, 28.934967]],
  ["KIX", [34.43533, 135.24397]],
  ["KJA", [56.18113, 92.48286]],
  ["KTM", [27.699905, 85.35657]],
  ["KUF", [53.50782, 50.14742]],
  ["KUL", [2.755672, 101.70539]],
  ["KWI", [29.240116, 47.971252]],
  ["KZN", [55.60844, 49.29824]],
  ["LAD", [-8.847951, 13.234862]],
  ["LAS", [36.086945, -115.1486]],
  ["LAX", [33.943398, -118.40828]],
  ["LCA", [34.880867, 33.62599]],
  ["LCY", [51.5, 0.05]],
  ["LED", [59.806084, 30.3083]],
  ["LEE", [28.8288, -81.8071]],
  ["LGA", [40.774254, -73.87162]],
  ["LGW", [51.156807, -0.161863]],
  ["LHE", [31.520832, 74.40278]],
  ["LHR", [51.469604, -0.453566]],
  ["LIM", [-12.019421, -77.107666]],
  ["LIS", [38.770042, -9.128165]],
  ["LLA", [65.54939, 22.123587]],
  ["LOS", [6.577871, 3.321178]],
  ["LPB", [-16.50889, -68.1769]],
  ["LPP", [61.046112, 28.156668]],
  ["LUX", [49.63111, 6.209539]],
  ["LYA", [34.736362, 112.38541]],
  ["MAA", [12.982267, 80.16378]],
  ["MAD", [40.46515, -3.570209]],
  ["MAN", [53.362907, -2.273354]],
  ["MBA", [-4.0327, 39.60325]],
  ["MCI", [39.293808, -94.719925]],
  ["MCO", [28.432177, -81.308304]],
  ["MCT", [23.588078, 58.29022]],
  ["MDE", [6.171382, -75.42821]],
  ["MDW", [41.788136, -87.74087]],
  ["MEB", [-37.736668, 144.8975]],
  ["MEL", [-37.669613, 144.84978]],
  ["MEM", [35.04458, -89.98226]],
  ["MEX", [19.435278, -99.07278]],
  ["MFE", [26.181295, -98.23978]],
  ["MFM", [22.156588, 113.57285]],
  ["MGM", [32.305042, -86.39029]],
  ["MIA", [25.796, -80.27824]],
  ["MLE", [4.201389, 73.524445]],
  ["MNL", [14.509602, 121.01251]],
  ["MPM", [-25.924389, 32.57429]],
  ["MRN", [35.8202, -81.6114]],
  ["MRS", [43.44178, 5.222137]],
  ["MRU", [-20.431997, 57.67663]],
  ["MSP", [44.883015, -93.21092]],
  ["MSQ", [53.889725, 28.032442]],
  ["MUC", [48.353004, 11.790143]],
  ["MXP", [45.627403, 8.71237]],
  ["NAG", [21.090036, 79.05636]],
  ["NAY", [39.7825, 116.38778]],
  ["NGB", [29.820415, 121.462395]],
  ["NNG", [22.61321, 108.1675]],
  ["NOU", [-22.01639, 166.21611]],
  ["NQZ", [51.02781, 71.4612]],
  ["NRT", [35.773212, 140.38744]],
  ["NUE", [49.494167, 11.077062]],
  ["OMA", [41.29957, -95.89972]],
  ["ORD", [41.976913, -87.90488]],
  ["ORF", [36.898582, -76.20629]],
  ["ORK", [51.846645, -8.48914]],
  ["ORY", [48.728283, 2.3597]],
  ["OSL", [60.19419, 11.100411]],
  ["OTP", [44.571156, 26.077063]],
  ["OVB", [55.00901, 82.667]],
  ["OXR", [34.2011, -119.206]],
  ["PAE", [47.90972, -122.28445]],
  ["PAO", [37.4583, -122.114]],
  ["PAP", [18.575394, -72.29471]],
  ["PBC", [19.135, -98.3675]],
  ["PBH", [27.433332, 89.416664]],
  ["PBM", [5.451389, -55.191113]],
  ["PDK", [33.875557, -84.30194]],
  ["PDX", [45.588997, -122.5929]],
  ["PEK", [40.078537, 116.5871]],
  ["PER", [-31.933603, 115.960236]],
  ["PES", [61.683334, 34.333332]],
  ["PHL", [39.87641, -75.2433]],
  ["PHX", [33.435036, -112.00016]],
  ["PIT", [40.49585, -80.25657]],
  ["PKV", [57.816666, 28.3]],
  ["PMO", [38.186523, 13.104779]],
  ["PNH", [11.546111, 104.84778]],
  ["PNQ", [18.581388, 73.920555]],
  ["POA", [-29.98961, -51.17709]],
  ["POX", [49.05, 2.1]],
  ["PRG", [50.10619, 14.266638]],
  ["PTY", [9.066897, -79.38764]],
  ["PUS", [35.179317, 128.94873]],
  ["PWK", [42.1136, -87.8935]],
  ["PWQ", [52.183334, 77.066666]],
  ["QRO", [20.6, -100.38333]],
  ["QZO", [43.4558, 11.847]],
  ["RHV", [37.3343, -121.82]],
  ["RIC", [37.50611, -77.3225]],
  ["RIX", [56.92208, 23.979807]],
  ["RMQ", [24.255674, 120.605576]],
  ["ROB", [6.239722, -10.358889]],
  ["ROV", [47.25, 39.75]],
  ["RTM", [51.948948, 4.433606]],
  ["RUH", [24.95929, 46.702877]],
  ["RUN", [-20.892, 55.511875]],
  ["SAN", [32.731937, -117.19731]],
  ["SBN", [41.700554, -86.31335]],
  ["SCL", [-33.397175, -70.79382]],
  ["SDV", [32.104885, 34.787857]],
  ["SEA", [47.44384, -122.301735]],
  ["SFO", [37.615215, -122.38988]],
  ["SGN", [10.813045, 106.662476]],
  ["SHA", [31.196815, 121.34197]],
  ["SHE", [41.861084, 123.426926]],
  ["SIN", [1.361173, 103.990204]],
  ["SJC", [37.366737, -121.92638]],
  ["SJU", [18.437403, -66.004684]],
  ["SJW", [38.274376, 114.69443]],
  ["SKG", [40.520832, 22.972221]],
  ["SLC", [40.785645, -111.980675]],
  ["SMF", [38.692284, -121.5937]],
  ["SOF", [42.688343, 23.41443]],
  ["STL", [38.74228, -90.36587]],
  ["STP", [44.933334, -93.066666]],
  ["SVX", [56.750336, 60.804314]],
  ["SYD", [-33.932922, 151.1799]],
  ["SZV", [31.3, 120.63333]],
  ["SZX", [22.639444, 113.81084]],
  ["TAO", [36.265884, 120.38236]],
  ["TAS", [41.262714, 69.26619]],
  ["TGU", [14.060123, -87.21972]],
  ["TIR", [13.635721, 79.54293]],
  ["TLH", [30.395782, -84.34444]],
  ["TLL", [59.416622, 24.798702]],
  ["TLV", [32.000454, 34.870743]],
  ["TNA", [36.85769, 117.20688]],
  ["TNR", [-18.799631, 47.47503]],
  ["TPA", [27.97987, -82.535416]],
  ["TPE", [25.07639, 121.22389]],
  ["TSN", [39.122627, 117.3399]],
  ["TUL", [36.189808, -95.8901]],
  ["TXL", [52.553944, 13.291722]],
  ["TYO", [35.5533, 139.781]],
  ["UFA", [54.565403, 55.884544]],
  ["UIO", [-0.123811, -78.35597]],
  ["ULN", [47.85275, 106.76327]],
  ["VIE", [48.11972, 16.563583]],
  ["VNO", [54.643078, 25.279606]],
  ["VNY", [34.2073, -118.491]],
  ["VOZ", [51.812355, 39.226997]],
  ["VTE", [17.975431, 102.56772]],
  ["VVO", [43.378574, 132.14075]],
  ["WAW", [52.170906, 20.97329]],
  ["WLG", [-41.329037, 174.81216]],
  ["WUH", [30.776598, 114.209625]],
  ["WUX", [31.49289, 120.42438]],
  ["XIY", [34.441154, 108.75605]],
  ["YUL", [45.457714, -73.74991]],
  ["YVR", [49.1947, -123.17919]],
  ["YWG", [49.9, -97.23333]],
  ["YXE", [52.169704, -106.69037]],
  ["YYC", [51.131393, -114.01055]],
  ["YYZ", [43.681583, -79.61146]],
  ["ZAG", [45.733242, 16.06152]],
  ["ZDM", [32.2719, 35.0194]],
  ["ZPM", [49.0122, 12.0997]],
  ["ZQZ", [40.7386, 114.93]],
  ["ZRH", [47.450603, 8.561746]]
]);

export default iata;
