Channel.create!([
  {title: "general", kind: "channel"},
  {title: "outdoors", kind: "channel"},
  {title: "food", kind: "channel"},
  {title: "doggy 911", kind: "channel"}
])
User.create!([
  {username: "ryley", password_digest: "$2a$10$LEIHrnIjcn/4JWD./9LRc.bLjeXUCoo.yddsVWxUAknaetcWfNsQ.", session_token: "fzXR_Bc0qKvCIMMWH4BkQQ", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1490378548/Ryley_Sill_omsfin.png"},
  {username: "gizmo", password_digest: "$2a$10$hVl0qd1k7jdVbeOd7VIr4elUnklC7ui.BOp6.lNiUDm1KQt15cM.y", session_token: "dOuoyjNioo27naAF1dJJ0Q", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284007/93f08461fdb43e370513d7e11aa06e06_xbnklo.jpg"},
  {username: "max", password_digest: "$2a$10$LpphU8zARYzEYD6m7ABdbOIMX7ZMik4j3Xy/XjFNh.EW875n6wubG", session_token: "kLbzafSyrEvgr6gvlC_0cw", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284006/mensweardog24_sqgaeu.jpg"},
  {username: "rocky", password_digest: "$2a$10$BMyua6DXIp.0XWHF5laqn.WDe6FQDTu/z6qi2Es3/RrEkWGeZP7ty", session_token: "e5JhlUe5EROA7RzJ2iyRIg", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284006/url_i84ppt.jpg"},
  {username: "thor", password_digest: "$2a$10$ysd8nCFMcIuyBhNV2r.VqONGaWJkku.e5j167jM7YmJJ4ax6nvhhO", session_token: "xyFvY8BLffT6vyic5Vjs9Q", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284006/Bodhi_nt3tkt.jpg"},
  {username: "scout", password_digest: "$2a$10$lKk8uU8sfAv5eXwrcGcEt.9LBXw0jX9vGR/lq3E3uAa/SANloeOVe", session_token: "YUR4S081DpQYYc1iiwfQPQ", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284004/tumblr_onjqu1koOe1s4yg05o1_1280_urge6x.jpg"},
  {username: "sparky", password_digest: "$2a$10$tukBrL2r.gw5Bw8awVJOqenq4ipQwTjmqHDQZl..ilcY7HqMbsJZ2", session_token: "xUVYh1ZfHEEwmmXn72mZqg", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284003/7bc8054221d49d132153e370540df101_iy3bxd.jpg"},
  {username: "oreo", password_digest: "$2a$10$bja6zoxM1wWj3K.NK/mWnOJ.UVP/isq3gc85UfwNE64RVfrHSETdG", session_token: "XWzUPF_Ip3bwabNebWa9zA", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284003/2b8020eaedd3d5c83f2afe32af2d6a5f_yeg7k7.jpg"},
  {username: "rufus", password_digest: "$2a$10$ecHVCQnSWCjGc3ESn.nICegVOqP6zTDgFczOdftmpL/ewKEdkbuju", session_token: "SLpnBWgoumMIXTmWJNFDAw", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284004/03fcf273a19f98046dcdfae57da53788_nz4fpf.jpg"},
  {username: "harley", password_digest: "$2a$10$DJd8zgvaph/4B1TlYnddaelOC.8IjA1V8wG4otsooswn7D.HFscmq", session_token: "bWBrISqxUIdEag092ti7Xg", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284005/8c1dae2b88ced319ed9560b1b7aa2bf6_vpmuh2.jpg"},
  {username: "coco", password_digest: "$2a$10$iKYuuNZClQ/I1AZnJx.jlexZAjTXLrGjwqM0XwUFylojE4dpW/BNu", session_token: "9gNAhVkyiv7HDaVW0Oho0g", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284003/8414d652ec00f555cf412e9dfd374a76_wbeydm.jpg"},
  {username: "hunter", password_digest: "$2a$10$Tn9YHgybRxgtm8OH1Bcl8Oqz5.YXxNc/Gv2wEwSSUTvChF4CtIrHO", session_token: "RLupQcK5zGuMq7ELdBIXUA", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283593/images-1_tmhe3g.jpg"},
  {username: "peanut", password_digest: "$2a$10$KOcKQjgiP.U95fxJcDnTXuttJq1i9.ZNTzqDA.FEcE15DD9K7IKGa", session_token: "6ssCEc07RALUMadCUHuCPQ", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283594/eX2cSpHo_oqeyvl.jpg"},
  {username: "elvis", password_digest: "$2a$10$PJVn/cGV1/K0OjvGP3Y28.zodzEPmE1dFQnNsithRXvi5plzEIVcy", session_token: "2Nfz69oIpGaKL3ptQ9sOaA", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283592/dog-breed-selector-australian-shepherd_zmtdnf.jpg"},
  {username: "gunner", password_digest: "$2a$10$PXD3wJVCYtbwQWy2WQI.NuGPJU4SF0iRl935ieolHW5vHk7R3E86m", session_token: "bA3vC5b1ltplqOJXLHpKDg", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284007/Trotter-1-650x650_r9xmm2.jpg"},
  {username: "scooter", password_digest: "$2a$10$NnVvyWUwOb/eI4g4E09qVupxrSHCgDdQjhta7F6lwPbyc71C/fdqm", session_token: "R8fJo8OGBXeJIVaZgOryrQ", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284004/5e97dc4a7765069489d7aa1ed971a73f_zvpc3t.jpg"},
  {username: "bentley", password_digest: "$2a$10$zS4eXGMvGINUciwKnlJ1XOwArUeC.b0hQli1.cpDVKHeCqiutmFM6", session_token: "I9bsCjhre4KpaUjqjGmdCQ", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284005/16_obn7ue.jpg"},
  {username: "oscar", password_digest: "$2a$10$mAgUWgtyLwfGOXverZ4ntujxwDf6mVyG0Wny9VT9vhCK6HW2ni6wa", session_token: "O4kB3glDy2nhoex_QziZmg", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284005/This-Fashionable-Frenchie-Will-Crack-You-Up-And-Steal-Your-Heart-580a77f661293__880_x2crxf.jpg"},
  {username: "cooper", password_digest: "$2a$10$ZLdV30Ai2GELvweL56p96.BWn3mh.Op8af53POxoaZVWXhgNQQouG", session_token: "SxqjSASDIwpdrKv19RhxLg", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284005/mensweardog10_nw1uwa.jpg"},
  {username: "sammy", password_digest: "$2a$10$A0WNmHNcHAyT8zG5vA55c.Yhs6E.Veg9avIAR2Pl1UJftTlsiPpJO", session_token: "GQoVvmsjDwGhrWQdC9MYyw", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284005/e3e068373f20d488be0273ef302c6aab_qaqls6.jpg"},
  {username: "baxter", password_digest: "$2a$10$/wWq0ZMjhsYA/ulzcXSdt.k9GIm1zSmuasAvzRVDGX8IRFjjfMTMW", session_token: "WG6gFONI6O3208E9VA41oQ", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284003/3_g9tjlh.jpg"},
  {username: "henry", password_digest: "$2a$10$GW9vUvjdcBHBFAq.zZ4eP.BDq1Kasga9X6VybZi.a.QYhV4XR7zVi", session_token: "6RjKbDjCTndRIuvIj0kgHw", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283594/dogs-pembroke-welsh-corgi-400x400_h73mni.jpg"},
  {username: "bandit", password_digest: "$2a$10$S63WAUrduZSieVI8c6JoyuK2UZ9oo/Evg0UpXnTmDHlEaLhTQDIKe", session_token: "cIMNM3p2psiUm8ByPV2LWQ", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284007/monsieurlenny_e4949t.png"},
  {username: "apollo", password_digest: "$2a$10$1pwqCMm5Np8pq04b5m3iGeds1X/jsXgzdYF062ldfip4Xl7daU1iO", session_token: "LBQNa8VFcytU8fmQ7_MoLA", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283595/ba49862cafb8d0f0200e4bcccf5e0e58_zlp9tw.jpg"},
  {username: "bo", password_digest: "$2a$10$SDMBaFnMO89jN2meLzgIGehrwHU73hJJ5X8dixysrVG9sKovKopIy", session_token: "ZU7Ty4TLgx8CYd15vvZN9g", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284003/9dd35f68bbd9e4763be9c6cb4399528f_hzybrz.jpg"},
  {username: "teddy", password_digest: "$2a$10$MElfcRwtHZSJ16a7rCe31uJb9Bb0bTlXwXkIF4ZYzyRKE7yx0Sco.", session_token: "q9XqyYIabZmkGoTYb4wLJA", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283592/english-bulldog-538485_960_720_xplius.jpg"},
  {username: "bear", password_digest: "$2a$10$gXJ3JnnUR0Z3jdP0jdKPMegtHRKKTNKG2bSSfrKmU3BpKZye9BuXu", session_token: "LG65c4vXJJ86abufqW2NkQ", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284003/82089a3078884acc523deff6dac71b0a_nm0y8b.jpg"},
  {username: "simba", password_digest: "$2a$10$dIAts2ytsFvdeIwCmZzPHua7eUPb23HoUMcQ9sfiIeXyPnOX4R95u", session_token: "hfgA7kfMhDz7-2kaoimwFQ", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283594/too-cute-doggone-it-video-playlist_t1gcvm.jpg"},
  {username: "tank", password_digest: "$2a$10$vhZV.OkRfiMEVqTJEH/52OejzgCS6pEQn.H4KQZnPm4QW/NC7di6i", session_token: "c44cNneArwIKvdqYZkfCFQ", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283593/scroll006_s8m8u8.jpg"},
  {username: "kobe", password_digest: "$2a$10$dCnca1vZMRXnYNXoClFcUOLGry6pHsD53Y3F0KQHEQYhzDY972.Va", session_token: "GBpZVVMoW8KRBXLW9_cnqA", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283592/scroll000_df7fql.jpg"},
  {username: "duke", password_digest: "$2a$10$9TBkLQdnuHwDOlHtOdsN9utsCP.pfZnplvsjQIlHL5UAxp.FPyCLS", session_token: "qYHEhH4x3UT4n7aH8K86bw", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283595/hsdogdog-profile_image-5550ade194780dfc-300x300_dmrs6e.jpg"},
  {username: "tyson", password_digest: "$2a$10$ppNdHoFN6hUo.rB.sIM/9OL6HkNkxeqysiKb3cjonbBd8b8FJO5r2", session_token: "N1VhBspNDwrp50dAQ-xfQg", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283595/44329241_385x385_lg1iuk.jpg"},
  {username: "finn", password_digest: "$2a$10$HYDKHdx5PR7fGlnS5E2WH.xGwdIiXCDq4Khtk/XurOxKWMZ.6WYu.", session_token: "usbN-pwBGhmbvKVkdYpUSw", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283593/images_kvf6jl.jpg"},
  {username: "murphy", password_digest: "$2a$10$G/ApDYyh4vTaDBcBQdyexuFCy42Vm/zdYLTmIY0vbjykiWRvDPmVe", session_token: "BV_robeWSrLW9i_z3-eKtw", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492284004/argyl-bow-tie_hlry0q.jpg"},
  {username: "winston", password_digest: "$2a$10$SnmighLV3dddtSYG3DtMNu9eTNJpjzUGDhYmabQWdCPdWx25A8V0W", session_token: "ra78qiW0cHs0qK1OQmSM6g", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283595/square-neapolitan-mastiff_gmlbn7.jpg"},
  {username: "spike", password_digest: "$2a$10$Vs.G.v.rWzxIWAIdmn3mPeuVwUgfDsaEFwX0DLKYN6CSGYBaYw6CC", session_token: "9o0iBbNctLTS0_yz6bn3gg", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283593/thul-42f6252d-3299-512f-990d-351d481f122b_olvizu.jpg"},
  {username: "frankie", password_digest: "$2a$10$ldOsbuu8HLEk26uXZmNJzuWZoJabUvVnbYk5qHsDCRJJzqihfRSe.", session_token: "HfHeWeJHxe6W_qb7ELPqCw", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283593/eyoMG92k_rqocvh.jpg"},
  {username: "romeo", password_digest: "$2a$10$5F.3zFcYHeynFE.UD.T1S.sBfipmPqqjev/UmYKi7CwhYtjUaJi.S", session_token: "xCwbol_ZJnMbOqRHNg4I4A", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283593/scroll0015_cdfpgz.jpg"},
  {username: "lucky", password_digest: "$2a$10$o5DWgl2EmOudRFUm2yRBuecWJr/iLnb4KoFBSdH6QaYLZqFwZF1zW", session_token: "nO7hYsNGVjC-MjK7tLuE-A", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283592/scroll004_qmtr3r.jpg"},
  {username: "rex", password_digest: "$2a$10$WvAuXGLOhcbxhKRClYyYiu.bJXR5txkzo6GFxtny20PppIlZUdbFG", session_token: "I-u4T9Y1AfnrpuP0ix8IJw", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492283594/thul-f334512b-dcfb-5fe8-be45-184c992739e8_kp6sbx.jpg"},
  {username: "doggy 911", password_digest: "$2a$10$aAgglBl2eekirYE/Hz4we.7WHqUZvOmYWBj3AGtJhUug5FgH/PDN.", session_token: "0ru-eJYhKLyfE3V0KajBNw", image: "https://res.cloudinary.com/dwqeotsx5/image/upload/v1492285370/abcb475f22e4cd21a67dfccb18599e5c_hrmgla.jpg"}
])
Membership.create!([
  {channel_id: 1, user_id: 2},
  {channel_id: 1, user_id: 4},
  {channel_id: 1, user_id: 6},
  {channel_id: 1, user_id: 8},
  {channel_id: 1, user_id: 10},
  {channel_id: 1, user_id: 12},
  {channel_id: 1, user_id: 14},
  {channel_id: 1, user_id: 18},
  {channel_id: 1, user_id: 20},
  {channel_id: 1, user_id: 22},
  {channel_id: 1, user_id: 24},
  {channel_id: 1, user_id: 26},
  {channel_id: 1, user_id: 28},
  {channel_id: 1, user_id: 30},
  {channel_id: 1, user_id: 32},
  {channel_id: 1, user_id: 34},
  {channel_id: 1, user_id: 36},
  {channel_id: 1, user_id: 38},
  {channel_id: 1, user_id: 40},
  {channel_id: 1, user_id: 39},
  {channel_id: 1, user_id: 37},
  {channel_id: 1, user_id: 35},
  {channel_id: 1, user_id: 33},
  {channel_id: 1, user_id: 31},
  {channel_id: 1, user_id: 29},
  {channel_id: 1, user_id: 27},
  {channel_id: 1, user_id: 25},
  {channel_id: 1, user_id: 1},
  {channel_id: 2, user_id: 3},
  {channel_id: 2, user_id: 5},
  {channel_id: 2, user_id: 7},
  {channel_id: 2, user_id: 9},
  {channel_id: 2, user_id: 11},
  {channel_id: 2, user_id: 13},
  {channel_id: 2, user_id: 15},
  {channel_id: 2, user_id: 17},
  {channel_id: 2, user_id: 19},
  {channel_id: 2, user_id: 21},
  {channel_id: 2, user_id: 23},
  {channel_id: 2, user_id: 25},
  {channel_id: 2, user_id: 27},
  {channel_id: 2, user_id: 29},
  {channel_id: 2, user_id: 31},
  {channel_id: 2, user_id: 33},
  {channel_id: 2, user_id: 35},
  {channel_id: 2, user_id: 37},
  {channel_id: 2, user_id: 39},
  {channel_id: 2, user_id: 40},
  {channel_id: 2, user_id: 2},
  {channel_id: 2, user_id: 4},
  {channel_id: 2, user_id: 6},
  {channel_id: 2, user_id: 8},
  {channel_id: 2, user_id: 10},
  {channel_id: 2, user_id: 12},
  {channel_id: 2, user_id: 14},
  {channel_id: 2, user_id: 16},
  {channel_id: 2, user_id: 18},
  {channel_id: 3, user_id: 1},
  {channel_id: 3, user_id: 2},
  {channel_id: 3, user_id: 3},
  {channel_id: 3, user_id: 4},
  {channel_id: 3, user_id: 5},
  {channel_id: 3, user_id: 6},
  {channel_id: 3, user_id: 7},
  {channel_id: 3, user_id: 8},
  {channel_id: 3, user_id: 9},
  {channel_id: 3, user_id: 10},
  {channel_id: 3, user_id: 11},
  {channel_id: 3, user_id: 12},
  {channel_id: 3, user_id: 13},
  {channel_id: 3, user_id: 14},
  {channel_id: 3, user_id: 16},
  {channel_id: 3, user_id: 15},
  {channel_id: 3, user_id: 16},
  {channel_id: 3, user_id: 17},
  {channel_id: 3, user_id: 18},
  {channel_id: 3, user_id: 19},
  {channel_id: 3, user_id: 20},
  {channel_id: 3, user_id: 21},
  {channel_id: 3, user_id: 22},
  {channel_id: 4, user_id: 41},
  {channel_id: 4, user_id: 24},
  {channel_id: 4, user_id: 25},
  {channel_id: 4, user_id: 26},
  {channel_id: 4, user_id: 27},
  {channel_id: 4, user_id: 28},
  {channel_id: 4, user_id: 29},
  {channel_id: 4, user_id: 30},
  {channel_id: 4, user_id: 31},
  {channel_id: 4, user_id: 32},
  {channel_id: 4, user_id: 33},
  {channel_id: 4, user_id: 34},
  {channel_id: 4, user_id: 35},
  {channel_id: 4, user_id: 36},
  {channel_id: 4, user_id: 37},
  {channel_id: 4, user_id: 38},
  {channel_id: 4, user_id: 39},
  {channel_id: 4, user_id: 40},
  {channel_id: 4, user_id: 15},
  {channel_id: 4, user_id: 16},
  {channel_id: 4, user_id: 17},
  {channel_id: 4, user_id: 18},
  {channel_id: 4, user_id: 19},
  {channel_id: 4, user_id: 23}
])
Message.create!([
  {body: "Doggy 911, what's ur emergency?", author_id: 41, channel_id: 4, gif_url: ""},
  {body: "MY HUMAN WENT TO WORK", author_id: 38, channel_id: 4, gif_url: ""},
  {body: "so?", author_id: 41, channel_id: 4, gif_url: ""},
  {body: " WHAT IF THIS TIME HE DOESN'T COME BACK", author_id: 38, channel_id: 4, gif_url: ""},
  {body: "OMG", author_id: 41, channel_id: 4, gif_url: ""},
  {body: "WHAT IF I'M HERE ALONE FOREVER", author_id: 38, channel_id: 4, gif_url: ""},
  {body: "WHAT WILL U EAT", author_id: 41, channel_id: 4, gif_url: ""},
  {body: "probably eat the cat LOL", author_id: 38, channel_id: 4, gif_url: ""},
  {body: "LOL", author_id: 41, channel_id: 4, gif_url: ""},
  {body: "HELLLLPPPPP", author_id: 37, channel_id: 4, gif_url: ""},
  {body: "Doggy 911, what's ur emergency?", author_id: 41, channel_id: 4, gif_url: ""},
  {body: "THEYRE PUSHIN THAT LOUD THING AROUND ON THE CARPET AGAIN", author_id: 37, channel_id: 4, gif_url: ""},
  {body: "OMG", author_id: 41, channel_id: 4, gif_url: ""},
  {body: "OMG", author_id: 37, channel_id: 4, gif_url: ""},
  {body: "Did it stop?", author_id: 41, channel_id: 4, gif_url: ""},
  {body: "Yes thank God I was- WAIT THERE'S A LONG SUCKY NOSE ON IT NOW ", author_id: 37, channel_id: 4, gif_url: ""},
  {body: "OMG", author_id: 41, channel_id: 4, gif_url: ""},
  {body: "OMG", author_id: 37, channel_id: 4, gif_url: ""},
  {body: "OMG", author_id: 41, channel_id: 4, gif_url: ""},
  {body: "OMG", author_id: 37, channel_id: 4, gif_url: ""},
  {body: "who wants to go to the park today?", author_id: 39, channel_id: 2, gif_url: ""},
  {body: "already here! bring tennis balls", author_id: 25, channel_id: 2, gif_url: ""},
  {body: "OH BOY OH BOY DID YOU SAY TENNIS BALLS?!", author_id: 23, channel_id: 2, gif_url: ""},
  {body: "I AM COMING NOW PLZ WAIT 4 ME", author_id: 23, channel_id: 2, gif_url: ""},
  {body: "SEND HELP IMMEDIATELY", author_id: 31, channel_id: 4, gif_url: ""},
  {body: "Doggy 911, what's ur emergency?", author_id: 41, channel_id: 4, gif_url: ""},
  {body: "MY BALL IS UNDER THE COUCH", author_id: 31, channel_id: 4, gif_url: ""},
  {body: "Did you try barking at it?", author_id: 41, channel_id: 4, gif_url: ""},
  {body: "IT DIDN'T WORK", author_id: 31, channel_id: 4, gif_url: ""},
  {body: "OMG", author_id: 41, channel_id: 4, gif_url: ""},
  {body: "HAHA GUYS LOOK I GAVE MY SON A LEMON", author_id: 32, channel_id: 3, gif_url: "https://media4.giphy.com/media/XnJpTAWQJZ2ta/200.gif"},
  {body: "CALL 911", author_id: 41, channel_id: 4, gif_url: ""},
  {body: "GUYS LOOK WHAT TUCKER'S HUMAN BOUGHT", author_id: 40, channel_id: 2, gif_url: "https://media4.giphy.com/media/JytfKJZrPnvUs/200.gif"},
  {body: "WOW that is amazing!", author_id: 12, channel_id: 2, gif_url: ""},
  {body: "OMG", author_id: 2, channel_id: 2, gif_url: ""},
  {body: "What a lucky duck!", author_id: 13, channel_id: 2, gif_url: ""},
  {body: "That's nothing! Remember when Oscar's human made tennis balls fall from the sky?!", author_id: 9, channel_id: 2, gif_url: "https://media1.giphy.com/media/mp7lPwpEOCZ7G/200.gif"},
  {body: "BEST DAY EVER BEST DAY EVER ", author_id: 17, channel_id: 2, gif_url: ""},
  {body: "OMG", author_id: 40, channel_id: 2, gif_url: ""},
  {body: "OMG", author_id: 7, channel_id: 2, gif_url: ""},
  {body: "Wish I could join you guys today! It's still freezing here!", author_id: 19, channel_id: 2, gif_url: "https://media1.giphy.com/media/nQ8XtX3ctBCkE/200.gif"},
  {body: "OMG SNOW. LOVE THAT STUFF", author_id: 29, channel_id: 2, gif_url: ""},
  {body: "BEST STUFF EVER", author_id: 8, channel_id: 2, gif_url: ""},
  {body: "Had the kids out in the snow last winter. They loved it!", author_id: 31, channel_id: 2, gif_url: "https://media1.giphy.com/media/385FGfqyFXtgQ/200.gif"},
  {body: "HI GUYS LOOK AT THIS NICE CAT I MET TODAY", author_id: 31, channel_id: 1, gif_url: "https://media4.giphy.com/media/BLCHvwl9C5j1u/200.gif"},
  {body: "Wow! what a nice fellow!", author_id: 30, channel_id: 1, gif_url: ""},
  {body: "I also met a cat once!", author_id: 39, channel_id: 1, gif_url: "https://media0.giphy.com/media/I0NleimnLnwru/200.gif"},
  {body: "cats are the best!", author_id: 31, channel_id: 1, gif_url: ""},
  {body: "LOVE CATS", author_id: 35, channel_id: 1, gif_url: ""},
  {body: "Cats you say? Im skeptical", author_id: 10, channel_id: 1, gif_url: "https://media4.giphy.com/media/JfDNFU1qOZna/200.gif"},
  {body: "I'm with you Harley - I've had a few run in with cats before.", author_id: 40, channel_id: 1, gif_url: ""},
  {body: "OMG REX. What happened?", author_id: 37, channel_id: 1, gif_url: ""},
  {body: "Let's just say he didn't want to play fetch...", author_id: 40, channel_id: 1, gif_url: "https://media4.giphy.com/media/eiaXo7CKn4rcs/200.gif"},
  {body: "OMG", author_id: 27, channel_id: 1, gif_url: ""},
  {body: "OMG", author_id: 20, channel_id: 1, gif_url: ""},
  {body: "OMG I LOVE BELLY RUBS", author_id: 26, channel_id: 1, gif_url: ""},
  {body: "Tell me about it Simba! Belly rubs > cats any day", author_id: 10, channel_id: 1, gif_url: ""},
  {body: "Harley remember that time when your human bought those belly scratchers? HAHAHAHAHAHAHA", author_id: 20, channel_id: 1, gif_url: "https://media4.giphy.com/media/dTJd5ygpxkzWo/200.gif"},
  {body: "HAHAHA HOW EMBARASSING", author_id: 10, channel_id: 1, gif_url: ""},
  {body: "OH BOY OH BOY OH BOY GUYS", author_id: 36, channel_id: 1, gif_url: ""},
  {body: "GUESS WHERE IM GOING", author_id: 36, channel_id: 1, gif_url: ""},
  {body: "Where!", author_id: 24, channel_id: 1, gif_url: ""},
  {body: "Where!?", author_id: 32, channel_id: 1, gif_url: ""},
  {body: "CAR RIDE!!!", author_id: 36, channel_id: 1, gif_url: "https://media2.giphy.com/media/OFIsBxe3v7mKI/200.gif"},
  {body: "Wow!!!!", author_id: 28, channel_id: 1, gif_url: ""},
  {body: "CAR RIDES ARE THE BEST", author_id: 38, channel_id: 1, gif_url: ""},
  {body: "BRING ME BRING ME BRING ME", author_id: 35, channel_id: 1, gif_url: ""},
  {body: "BEST DAY EVER", author_id: 36, channel_id: 1, gif_url: ""},
  {body: "LOVE CAR RIDES", author_id: 36, channel_id: 1, gif_url: ""}
])
Reaction.create!([
  {user_id: 32, message_id: 8, image: ":joy:", likes: nil},
  {user_id: 32, message_id: 8, image: ":yum:", likes: nil},
  {user_id: 32, message_id: 8, image: ":100:", likes: nil},
  {user_id: 32, message_id: 8, image: ":satisfied:", likes: nil},
  {user_id: 32, message_id: 4, image: ":scream:", likes: nil},
  {user_id: 32, message_id: 27, image: ":confounded:", likes: nil},
  {user_id: 32, message_id: 27, image: ":disappointed_relieved:", likes: nil},
  {user_id: 32, message_id: 29, image: ":dizzy_face:", likes: nil},
  {user_id: 32, message_id: 16, image: ":astonished:", likes: nil},
  {user_id: 32, message_id: 16, image: ":scream_cat:", likes: nil},
  {user_id: 32, message_id: 12, image: ":scream_cat:", likes: nil},
  {user_id: 40, message_id: 64, image: ":joy:", likes: nil},
  {user_id: 40, message_id: 64, image: ":joy:", likes: nil},
  {user_id: 40, message_id: 64, image: ":stuck_out_tongue_closed_eyes:", likes: nil},
  {user_id: 40, message_id: 59, image: ":flushed:", likes: nil},
  {user_id: 40, message_id: 53, image: ":tired_face:", likes: nil},
  {user_id: 40, message_id: 61, image: ":grimacing:", likes: nil},
  {user_id: 40, message_id: 50, image: ":unamused:", likes: nil},
  {user_id: 40, message_id: 48, image: ":heart_eyes:", likes: nil},
  {user_id: 40, message_id: 64, image: ":joy:", likes: nil},
  {user_id: 40, message_id: 67, image: ":stuck_out_tongue_winking_eye:", likes: nil},
  {user_id: 40, message_id: 64, image: ":100:", likes: nil},
  {user_id: 40, message_id: 64, image: ":sweat_smile:", likes: nil},
  {user_id: 40, message_id: 64, image: ":satisfied:", likes: nil},
  {user_id: 40, message_id: 64, image: ":satisfied:", likes: nil},
  {user_id: 40, message_id: 58, image: ":joy:", likes: nil},
  {user_id: 40, message_id: 53, image: ":triumph:", likes: nil},
  {user_id: 40, message_id: 53, image: ":triumph:", likes: nil},
  {user_id: 40, message_id: 52, image: ":scream:", likes: nil},
  {user_id: 40, message_id: 43, image: ":blush:", likes: nil},
  {user_id: 40, message_id: 38, image: ":hear_no_evil:", likes: nil},
  {user_id: 40, message_id: 38, image: ":grin:", likes: nil},
  {user_id: 40, message_id: 38, image: ":hear_no_evil:", likes: nil},
  {user_id: 40, message_id: 33, image: ":sweat_smile:", likes: nil},
  {user_id: 40, message_id: 41, image: ":scream:", likes: nil},
  {user_id: 40, message_id: 41, image: ":stuck_out_tongue_closed_eyes:", likes: nil},
  {user_id: 40, message_id: 41, image: ":ok_hand:", likes: nil},
  {user_id: 40, message_id: 41, image: ":ok_hand:", likes: nil},
  {user_id: 40, message_id: 27, image: ":sweat:", likes: nil},
  {user_id: 40, message_id: 27, image: ":confounded:", likes: nil},
  {user_id: 40, message_id: 27, image: ":disappointed_relieved:", likes: nil}
])
