/** IATA airports location*/
const iata = new Map([
  ["AAL", [57.08655, 9.872241]],
  ["ABQ", [35.049625, -106.617195]],
  ["ABZ", [57.200253, -2.204186]],
  ["ACC", [5.60737, -0.171769]],
  ["ADL", [-34.9373, 138.539]],
  ["AES", [62.559643, 6.116605]],
  ["AGP", [36.675182, -4.489616]],
  ["AKL", [-37.004787, 174.78352]],
  ["ALA", [43.346653, 77.01145]],
  ["ALC", [38.287098, -0.557381]],
  ["AMM", [31.722534, 35.98932]],
  ["AMS", [52.30907, 4.763385]],
  ["ANC", [61.174442, -149.99638]],
  ["ARI", [-18.3486, -70.3386]],
  ["ASU", [-25.2399, -57.52]],
  ["ARN", [59.64982, 17.930365]],
  ["ATH", [37.93635, 23.946486]],
  ["ATL", [33.640068, -84.44403]],
  ["AUA", [12.502222, -70.013885]],
  ["AUH", [24.426912, 54.645973]],
  ["AUS", [30.202545, -97.66706]],
  ["AVL", [35.435, -82.5383]],
  ["AYT", [36.89928, 30.80135]],
  ["BAH", [26.26918, 50.62605]],
  ["BAQ", [10.8896, -74.7808]],
  ["BCN", [41.30303, 2.07593]],
  ["BEG", [44.819443, 20.306944]],
  ["BEY", [33.8261, 35.4931]],
  ["BFL", [35.429626, -119.04533]],
  ["BFS", [54.662395, -6.217616]],
  ["BGO", [60.289062, 5.228169]],
  ["BGW", [33.2833, 44.5]],
  ["BHX", [52.45252, -1.733256]],
  ["BJX", [20.985699, -101.479]],
  ["BKK", [13.693062, 100.752045]],
  ["BLI", [48.795734, -122.53267]],
  ["BLL", [55.747383, 9.147874]],
  ["BLQ", [44.529266, 11.293289]],
  ["BLR", [13.1979, 77.7063]],
  ["BMA", [59.3562, 17.9378]],
  ["BNA", [36.13174, -86.668945]],
  ["BNE", [-27.40303, 153.10905]],
  ["BOD", [44.83102, -0.70217]],
  ["BOG", [4.7001, -74.1438]],
  ["BOI", [43.569263, -116.22193]],
  ["BOM", [19.095509, 72.87497]],
  ["BOS", [42.36646, -71.02018]],
  ["BQN", [18.495832, -67.13]],
  ["BRE", [53.05297, 8.785352]],
  ["BRN", [46.911728, 7.50356]],
  ["BRS", [51.386757, -2.710659]],
  ["BRU", [50.89717, 4.483602]],
  ["BSL", [47.59961, 7.532604]],
  ["BUD", [47.433037, 19.261621]],
  ["BUF", [42.9399, -78.7284]],
  ["BTH", [1.12575, 104.112]],
  ["BTS", [48.1698, 17.1997]],
  ["BUR", [34.20069, -118.359]],
  ["BWI", [39.179527, -76.66894]],
  ["BWN", [4.94417, 114.928]],
  ["CAI", [30.120106, 31.40647]],
  ["CAN", [23.387861, 113.29734]],
  ["CBF", [41.26012, -95.7586]],
  ["CCU", [22.6578, 88.443]],
  ["CDG", [49.003197, 2.567023]],
  ["CEB", [10.31, 123.98]],
  ["CGK", [-6.12395, 106.661]],
  ["CGN", [50.878365, 7.122224]],
  ["CGP", [22.252, 91.8138]],
  ["CGO", [34.5197, 113.841]],
  ["CHI", [41.8831, -87.7661]],
  ["CHQ", [35.5402, 24.140373]],
  ["CHS", [32.8925, -80.0377]],
  ["CKG", [29.7157, 106.641]],
  ["CLD", [33.11667, -117.26667]],
  ["CLE", [41.410854, -81.83821]],
  ["CLT", [35.219166, -80.93584]],
  ["CMB", [7.18076, 79.8841]],
  ["CMH", [39.99818, -82.884964]],
  ["CMN", [33.36667, -7.586667]],
  ["COS", [38.79713, -104.70056]],
  ["CPH", [55.62905, 12.647601]],
  ["CPM", [33.8888, -118.239]],
  ["CPT", [-33.968906, 18.596489]],
  ["CRK", [15.1859, 120.559]],
  ["CSX", [28.1892, 113.22]],
  ["CTU", [30.581135, 103.9568]],
  ["CUL", [24.76643, -107.46958]],
  ["CUN", [21.040457, -86.874435]],
  ["CUR", [12.184615, -68.95706]],
  ["CVG", [39.0555, -84.66145]],
  ["CWB", [-25.5322, -49.1765]],
  ["CWL", [51.39877, -3.339075]],
  ["DAC", [23.8433, 90.3978]],
  ["DAL", [32.847, -96.8517]],
  ["DAR", [-6.87368, 39.2042]],
  ["DCA", [38.853436, -77.04346]],
  ["DEL", [28.556555, 77.10079]],
  ["DEN", [39.84939, -104.672844]],
  ["DFW", [32.89746, -97.036125]],
  ["DLS", [45.6194, -121.165]],
  ["DKR", [14.7394, -17.49]],
  ["DME", [55.4086, 37.9061]],
  ["DMM", [26.471111, 49.79778]],
  ["DOH", [25.267569, 51.558067]],
  ["DSM", [41.5337, -93.6578]],
  ["DTW", [42.20781, -83.35605]],
  ["DUB", [53.42728, -6.24357]],
  ["DUR", [-29.9701, 30.9505]],
  ["DUS", [51.278328, 6.76558]],
  ["DXB", [25.248665, 55.352917]],
  ["EDI", [55.948143, -3.364177]],
  ["ELP", [31.798948, -106.396]],
  ["EMA", [52.82587, -1.330595]],
  ["EUG", [44.119198, -123.21197]],
  ["EVN", [40.1473, 44.3959]],
  ["EWR", [40.68907, -74.17876]],
  ["EXT", [50.73111, -3.410968]],
  ["EZE", [-34.81273, -58.539833]],
  ["FAO", [37.020645, -7.968545]],
  ["FAT", [36.769623, -119.72024]],
  ["FCO", [41.794594, 12.250346]],
  ["FJR", [25.1097, 56.3306]],
  ["FLL", [26.071491, -80.144905]],
  ["FLR", [43.802128, 11.201989]],
  ["FNC", [32.6979, -16.7745]],
  ["FOC", [25.9351, 119.663]],
  ["FOR", [-3.77583, -38.5322]],
  ["FRA", [50.0484, 8.5707]],
  ["FTY", [33.7767, -84.5208]],
  ["FUK", [33.584286, 130.4439]],
  ["FUO", [23.0832996, 113.0699997]],
  ["GDL", [20.525198, -103.29921]],
  ["GDN", [54.380978, 18.468655]],
  ["GIG", [-22.8099995, -43.2505569]],
  ["GLA", [55.864212, -4.431782]],
  ["GND", [12.0042, -61.7861]],
  ["GOT", [57.66664, 12.294878]],
  ["GRQ", [53.1217, 6.5833]],
  ["GRU", [-23.425669, -46.481926]],
  ["GUA", [14.588071, -90.53068]],
  ["GUM", [13.492787, 144.80486]],
  ["GUW", [47.122814, 51.829556]],
  ["GVA", [46.229633, 6.105774]],
  ["GYD", [40.4675, 50.0467]],
  ["HAJ", [52.459255, 9.694766]],
  ["HAM", [53.63128, 10.006414]],
  ["HAN", [21.2212, 105.807]],
  ["HEL", [60.31795, 24.96645]],
  ["HER", [35.33663, 25.174192]],
  ["HET", [40.8514, 111.824]],
  ["HGH", [30.2295, 120.434]],
  ["HIO", [45.5418, -122.951]],
  ["HKG", [22.315248, 113.93649]],
  ["HMO", [29.089905, -111.051704]],
  ["HND", [35.54907, 139.78453]],
  ["HNL", [21.325832, -157.92166]],
  ["HHN", [49.9486, 7.2638]],
  ["HHP", [22.2889, 114.152]],
  ["HNY", [26.9053, 112.628]],
  ["HOG", [20.785278, -76.315]],
  ["HOU", [29.654512, -95.277016]],
  ["HUY", [53.583378, -0.34851]],
  ["HWD", [37.659278, -122.122417]],
  ["HYD", [17.2293, 78.4327]],
  ["IAD", [38.95315, -77.44774]],
  ["IAH", [29.983334, -95.34]],
  ["IBZ", [38.876595, 1.367803]],
  ["ICN", [37.448524, 126.45123]],
  ["IEV", [50.4017, 30.4497]],
  ["IGM", [35.256668, -113.94]],
  ["IND", [39.730515, -86.27281]],
  ["INV", [57.539345, -4.063738]],
  ["IPL", [32.837223, -115.57472]],
  ["ISB", [33.6167, 73.0967]],
  ["IST", [40.976665, 28.815277]],
  ["ITM", [34.7916, 135.44]],
  ["ITO", [19.714565, -155.03963]],
  ["IYK", [35.656666, -117.82917]],
  ["JAX", [30.4898, -81.686]],
  ["JFK", [40.642334, -73.78817]],
  ["JHB", [1.66256, 103.679]],
  ["JIB", [11.5472, 43.1592]],
  ["JNB", [-26.132664, 28.231314]],
  ["JRO", [-3.424123, 37.065342]],
  ["JRS", [31.8675, 35.214]],
  ["KBP", [50.341244, 30.895206]],
  ["KEF", [63.997765, -22.624283]],
  ["KGL", [-1.963042, 30.135014]],
  ["KHH", [22.5771, 120.35]],
  ["KHI", [24.9065, 67.1608]],
  ["KIV", [46.9278, 28.9308]],
  ["KIX", [34.43533, 135.24397]],
  ["KOA", [19.736174, -156.04108]],
  ["KRK", [50.075493, 19.793743]],
  ["KRS", [58.20255, 8.073732]],
  ["KTM", [27.6931, 85.3592]],
  ["KUL", [2.755672, 101.70539]],
  ["KWI", [29.240116, 47.971252]],
  ["LAD", [-8.847951, 13.234862]],
  ["LAS", [36.086945, -115.1486]],
  ["LAX", [33.943398, -118.40828]],
  ["LBA", [53.86934, -1.659985]],
  ["LCA", [34.880867, 33.62599]],
  ["LCY", [51.5, 0.05]],
  ["LED", [59.806084, 30.3083]],
  ["LEE", [28.8288, -81.8071]],
  ["LEJ", [51.42026, 12.221202]],
  ["LGA", [40.7772, -73.8726]],
  ["LGW", [51.156807, -0.161863]],
  ["LHE", [31.5196, 74.406]],
  ["LHR", [51.469604, -0.453566]],
  ["LIH", [21.978205, -159.34944]],
  ["LIM", [-12.019421, -77.107666]],
  ["LIN", [45.460957, 9.279157]],
  ["LIS", [38.770042, -9.128165]],
  ["LJU", [46.23102, 14.454972]],
  ["LLA", [65.549, 22.1233]],
  ["LOS", [6.577871, 3.321178]],
  ["LPA", [27.938944, -15.389351]],
  ["LPI", [58.4, 15.516667]],
  ["LPL", [53.337616, -2.854905]],
  ["LPP", [61.044066, 28.156402]],
  ["LTN", [51.87977, -0.376232]],
  ["LTO", [25.983334, -111.35]],
  ["LUX", [49.63111, 6.209539]],
  ["LYA", [34.7411, 112.388]],
  ["LYS", [45.721424, 5.080334]],
  ["MAA", [12.9814, 80.1641]],
  ["MAD", [40.46515, -3.570209]],
  ["MAN", [53.362907, -2.273354]],
  ["MBA", [-4.02639, 39.5992]],
  ["MCE", [37.28472, -120.51278]],
  ["MCI", [39.293808, -94.719925]],
  ["MCO", [28.432177, -81.308304]],
  ["MCT", [23.5933, 58.2844]],
  ["MDE", [6.16454, -75.4231]],
  ["MDW", [41.788136, -87.74087]],
  ["MEB", [-37.7281, 144.902]],
  ["MEL", [-37.669613, 144.84978]],
  ["MEM", [35.04458, -89.98226]],
  ["MEX", [19.435278, -99.07278]],
  ["MFE", [26.1765, -98.2394]],
  ["MFM", [22.1588, 113.577]],
  ["MFR", [42.369026, -122.87312]],
  ["MGM", [32.3053, -86.3909]],
  ["MIA", [25.796, -80.27824]],
  ["MKE", [42.948093, -87.90267]],
  ["MLA", [35.849777, 14.495401]],
  ["MLE", [4.19202, 73.5287]],
  ["MLM", [19.84351, -101.02693]],
  ["MME", [54.512226, -1.434013]],
  ["MMH", [37.63111, -118.85139]],
  ["MNL", [14.5097, 121.014]],
  ["MPM", [-25.9197, 32.5731]],
  ["MRN", [35.8202, -81.6114]],
  ["MRS", [43.44178, 5.222137]],
  ["MRU", [20.432, 57.6766]],
  ["MRY", [36.587296, -121.850815]],
  ["MSE", [51.35, 1.35]],
  ["MSP", [44.883015, -93.21092]],
  ["MSQ", [53.889725, 28.032442]],
  ["MSY", [29.984564, -90.25639]],
  ["MUC", [48.353004, 11.790143]],
  ["MUO", [43.13333, -115.683334]],
  ["MXP", [45.627403, 8.71237]],
  ["NAG", [21.0922, 79.0472]],
  ["NAP", [40.886112, 14.291667]],
  ["NAY", [39.7828, 116.388]],
  ["NBO", [-1.319167, 36.92578]],
  ["NCE", [43.66049, 7.205232]],
  ["NCL", [55.037064, -1.710629]],
  ["NDR", [35.15, -2.916667]],
  ["NGB", [29.8267002, 121.461998]],
  ["NNG", [22.6083, 108.172]],
  ["NOU", [-22.0146, 166.2129]],
  ["NRT", [35.773212, 140.38744]],
  ["NTE", [47.157623, -1.601402]],
  ["NUE", [49.494167, 11.077062]],
  ["NWI", [52.669533, 1.276782]],
  ["OAK", [37.71188, -122.21201]],
  ["OGG", [20.892883, -156.43863]],
  ["OKC", [35.39563, -97.59609]],
  ["OMA", [41.2996, -95.8994]],
  ["OPO", [41.237774, -8.670272]],
  ["ORD", [41.976913, -87.90488]],
  ["ORF", [36.8987, -76.2058]],
  ["ORK", [51.846645, -8.48914]],
  ["ORY", [48.7261, 2.36411]],
  ["OSC", [44.433334, -83.333336]],
  ["OSL", [60.19419, 11.100411]],
  ["OTP", [44.571156, 26.077063]],
  ["OXR", [34.2011, -119.206]],
  ["PAE", [47.9076, -122.277]],
  ["PAO", [37.4583, -122.114]],
  ["PAP", [18.58, -72.2925]],
  ["PBC", [19.1581, -98.3714]],
  ["PBH", [27.4033, 89.425]],
  ["PBM", [5.451389, -55.191113]],
  ["PDK", [33.8787, -84.3043]],
  ["PDX", [45.588997, -122.5929]],
  ["PEK", [40.078537, 116.5871]],
  ["PER", [-31.9482, 115.97]],
  ["PHL", [39.87641, -75.2433]],
  ["PHX", [33.435036, -112.00016]],
  ["PIT", [40.49585, -80.25657]],
  ["PMI", [39.547653, 2.730388]],
  ["PMO", [38.1822, 13.1033]],
  ["PNH", [11.5468, 104.844]],
  ["PNQ", [18.5802, 73.9182]],
  ["POA", [-29.9939, -51.1711]],
  ["POX", [49.0966, 2.04083]],
  ["PPT", [-17.55963, -149.60938]],
  ["PRC", [34.65, -112.424164]],
  ["PRG", [50.10619, 14.266638]],
  ["PSA", [43.69871, 10.399915]],
  ["PSP", [33.822975, -116.508446]],
  ["PTY", [9.066897, -79.38764]],
  ["PUS", [35.1743, 128.9363]],
  ["PVG", [31.151825, 121.799805]],
  ["PVR", [20.678297, -105.24898]],
  ["PWK", [42.1136, -87.8935]],
  ["PXO", [33.070023, -16.345014]],
  ["QRO", [20.6228, -100.369]],
  ["QZO", [43.4558, 11.847]],
  ["RAK", [31.601875, -8.026902]],
  ["RDU", [35.873592, -78.79086]],
  ["RHV", [37.3343, -121.82]],
  ["RIC", [37.5075, -77.3337]],
  ["RIX", [56.92208, 23.979807]],
  ["RMQ", [24.2647, 120.621]],
  ["RNO", [39.505783, -119.775696]],
  ["ROB", [6.23379, -10.3623]],
  ["RTM", [51.948948, 4.433606]],
  ["RUH", [24.9576, 46.6988]],
  ["RUN", [-20.89, 55.5164]],
  ["SAF", [35.6175, -106.08833]],
  ["SAL", [13.445126, -89.05723]],
  ["SAN", [32.731937, -117.19731]],
  ["SAT", [29.524937, -98.47264]],
  ["SAW", [40.904675, 29.309189]],
  ["SBA", [34.432835, -119.83648]],
  ["SBN", [41.7085, -86.3155]],
  ["SBP", [35.239113, -120.640625]],
  ["SCL", [-33.3906, -70.7858]],
  ["SDV", [32.110834, 34.7794]],
  ["SEA", [47.44384, -122.301735]],
  ["SEN", [51.572777, 0.701389]],
  ["SFB", [28.775118, -81.2432]],
  ["SFO", [37.615215, -122.38988]],
  ["SGN", [10.8189, 106.652]],
  ["SGP", [-20.4247, 120.141]],
  ["SHA", [31.1939, 121.346]],
  ["SHE", [41.6398, 123.483]],
  ["SHJ", [25.320873, 55.52029]],
  ["SIN", [1.35019, 103.99]],
  ["SJC", [37.366737, -121.92638]],
  ["SJD", [23.162354, -109.717285]],
  ["SJO", [9.998238, -84.20408]],
  ["SJW", [38.2807, 114.697]],
  ["SKG", [40.5197, 22.9709]],
  ["SLC", [40.785645, -111.980675]],
  ["SMF", [38.692284, -121.5937]],
  ["SMX", [34.905, -120.45778]],
  ["SOF", [42.688343, 23.41443]],
  ["SOU", [50.950726, -1.361318]],
  ["SPC", [28.626389, -17.755556]],
  ["SSH", [27.979357, 34.385254]],
  ["STL", [38.74228, -90.36587]],
  ["STN", [51.889267, 0.262703]],
  ["STP", [44.9345016, -93.0599976]],
  ["STR", [48.69073, 9.193624]],
  ["STS", [38.50889, -122.81167]],
  ["SVG", [58.88215, 5.629197]],
  ["SVO", [55.966324, 37.416573]],
  ["SVQ", [37.423477, -5.900136]],
  ["SXB", [48.544876, 7.627674]],
  ["SXF", [52.370277, 13.521388]],
  ["SXM", [18.044722, -63.11406]],
  ["SYD", [-33.932922, 151.1799]],
  ["SZV", [31.2631, 120.401]],
  ["SZX", [22.6393, 113.811]],
  ["TAO", [36.2661, 120.374]],
  ["TCM", [47.176666, -122.56461]],
  ["TFS", [28.044443, -16.5725]],
  ["TGU", [14.0615, -87.2172]],
  ["TIR", [13.6333, 79.5432]],
  ["TLH", [30.3956, -84.3453]],
  ["TLL", [59.416622, 24.798702]],
  ["TLS", [43.63007, 1.374321]],
  ["TLV", [32.000454, 34.870743]],
  ["TNA", [36.8572, 117.216]],
  ["TNG", [35.726288, -5.912898]],
  ["TNR", [-18.7968998, 47.4788017]],
  ["TPA", [27.97987, -82.535416]],
  ["TPE", [25.07639, 121.22389]],
  ["TRD", [63.454285, 10.917863]],
  ["TRF", [59.178085, 10.251807]],
  ["TSF", [45.655113, 12.204444]],
  ["TSN", [39.122627, 117.3399]],
  ["TUL", [36.2014, -95.8867]],
  ["TUS", [32.12069, -110.93737]],
  ["TXL", [52.553944, 13.291722]],
  ["TYO", [35.5533, 139.781]],
  ["UIO", [-0.145528, -78.49053]],
  ["ULN", [47.8431015, 106.7669983]],
  ["VCE", [45.502285, 12.337947]],
  ["VIE", [48.11972, 16.563583]],
  ["VIS", [36.319443, -119.39389]],
  ["VLC", [39.49179, -0.473475]],
  ["VNO", [54.6341019, 25.2858009]],
  ["VNY", [34.2073, -118.491]],
  ["VTE", [17.988322, 102.563256]],
  ["WAW", [52.170906, 20.97329]],
  ["WLG", [-41.3276, 174.811]],
  ["WUH", [30.7838001, 114.2080002]],
  ["WUX", [31.4944, 120.4290009]],
  ["XIY", [34.4471016, 108.7519989]],
  ["YEG", [53.307377, -113.584045]],
  ["YLW", [49.95154, -119.38139]],
  ["YUL", [45.457714, -73.74991]],
  ["YUM", [32.668606, -114.599266]],
  ["YVR", [49.1947, -123.17919]],
  ["YWG", [49.906, -97.2373]],
  ["YXE", [52.1708, -106.7]],
  ["YYC", [51.131393, -114.01055]],
  ["YYZ", [43.681583, -79.61146]],
  ["ZAG", [45.733242, 16.06152]],
  ["ZCL", [22.8, -102.55]],
  ["ZDM", [32.2719, 35.0194]],
  ["ZIH", [17.606783, -101.464066]],
  ["ZPM", [49.0122, 12.0997]],
  ["ZQZ", [40.7386, 114.93]],
  ["ZRH", [47.450603, 8.561746]]
]);

export default iata;
