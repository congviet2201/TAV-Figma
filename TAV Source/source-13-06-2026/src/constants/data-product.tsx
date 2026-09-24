import { IProduct, IProduct2, IProduct3 } from "@interfaces/IProduct";
// import hoian from "@assets/videos/racehoian.png";
// import laocao1 from "@assets/image/TAVLAOCAI/laocai.mp4";
// import laocao2 from "@assets/image/TAVLAOCAI/LAO CAI_DAY 1.jpg";
// import laocao3 from "@assets/image/TAVLAOCAI/LAO CAI_DAY 2.jpg";
// import laocao4 from "@assets/image/TAVLAOCAI/LAO CAI_DAY 3.jpg";
// import laocao5 from "@assets/image/TAVLAOCAI/LAOCAI DAY.jpg";
// import laocao6 from "@assets/image/TAVLAOCAI/LAOCAI NIGHT.jpg";
// import village1 from "@assets/image/TAVVILLAGECANADA/TAV_villa pool 001.png";
// import village2 from "@assets/image/TAVVILLAGECANADA/TAV_villa 001.jpg";
// import village3 from "@assets/image/TAVVILLAGECANADA/TAV_villa 002.jpg";
// import village4 from "@assets/image/TAVVILLAGECANADA/TAV_villa bedroom 005.png";
// import village5 from "@assets/image/TAVVILLAGECANADA/TAV_villa bedroom 006.png";
// import village6 from "@assets/image/TAVVILLAGECANADA/TAV_villa bedroom 007.png";
// import village7 from "@assets/image/TAVVILLAGECANADA/TAV_villa pentfloor 001.png";
// import village8 from "@assets/image/TAVVILLAGECANADA/TAV_villa pentfloor 002.png";
// import village9 from "@assets/image/TAVVILLAGECANADA/TAV_villa pool 002.png";
// import village10 from "@assets/image/TAVVILLAGECANADA/TAV_villa pool 003.png";
// import office1 from "@assets/image/TAVOFFICEJAPAN/TAV_villa office reception.png";
// import office2 from "@assets/image/TAVOFFICEJAPAN/TAV_villa office ariel view.png";
// import office3 from "@assets/image/TAVOFFICEJAPAN/TAV_villa office elevator.png";
// import office4 from "@assets/image/TAVOFFICEJAPAN/TAV_villa office entrance hall 002.png";
// import office5 from "@assets/image/TAVOFFICEJAPAN/TAV_villa office entrance hall sunset.png";
// import office6 from "@assets/image/TAVOFFICEJAPAN/TAV_villa office lanscape.jpg";
// import office7 from "@assets/image/TAVOFFICEJAPAN/TAV_villa office river view.png";
// import office8 from "@assets/image/TAVOFFICEJAPAN/TAV_villa office section.png";
// import office9 from "@assets/image/TAVOFFICEJAPAN/TAV_villa office terrace.png";
// import img1 from "@assets/image/product_3drender/1.png";
// import img3 from "@assets/image/product_3drender/3.png";
// import img4 from "@assets/image/product_3drender/4.png";
// import img5 from "@assets/image/product_3drender/5.png";
// import img6 from "@assets/image/product_3drender/6.png";
// import img11 from "@assets/image/product_3drender/11.png";
// import img33 from "@assets/image/product_3drender/33.png";
// import img44 from "@assets/image/product_3drender/44.png";
// import img55 from "@assets/image/product_3drender/55.png";
// import img66 from "@assets/image/product_3drender/66.png";
// import img77 from "@assets/image/product_3drender/77.png";
// import video2 from "@assets/image/product_3drender/2.mp4";
// import video22 from "@assets/image/product_3drender/22.mp4";
// import vid1 from "@assets/videos/interactive_products/1.mp4";
// import vid2 from "@assets/videos/interactive_products/2.mp4";
// import vid3 from "@assets/videos/interactive_products/3.mp4";
// import vid4 from "@assets/videos/interactive_products/4.mp4";
// import vid5 from "@assets/videos/interactive_products/5.mp4";
// import vid6 from "@assets/videos/interactive_products/6.mp4";
import mapping from "@assets/videos/mapping_3d.mp4";
import mapping3d from "@assets/videos/3dmmaping.png";
import left1 from "@assets/image/product_category/left_1.png";
import left2 from "@assets/image/product_category/left_2.png";
import active_left1 from "@assets/image/product_category/active_left_1.png";
import active_left2 from "@assets/image/product_category/active_left_2.png";
import right1 from "@assets/image/product_category/right_1.png";
import right2 from "@assets/image/product_category/right_2.png";
import active_right1 from "@assets/image/product_category/active_right_1.png";
import active_right2 from "@assets/image/product_category/active_right_2.png";

export const datamenuproduct = [
  {
    id: 1,
    name: "3D RENDER",
    srcDeskTop: left2,
    activeSrcDeskTop: active_left2,
    srcMobi: left2,
    activeSrcMobi: active_left2,
    link: "/products/3drender",
  },
  {
    id: 2,
    name: "3D MODEL",
    srcDeskTop: right2,
    activeSrcDeskTop: active_right2,
    srcMobi: left2,
    activeSrcMobi: active_left2,
    link: "/products/3dmodel",
  },
  {
    id: 3,
    name: "INTERACTIVE APP",
    srcDeskTop: right1,
    activeSrcDeskTop: active_right1,
    srcMobi: right2,
    activeSrcMobi: active_right2,
    link: "/products/interactiveapp",
  },
  {
    id: 4,
    name: "3D MAPPING",
    srcDeskTop: left1,
    activeSrcDeskTop: active_left1,
    srcMobi: right2,
    activeSrcMobi: active_right2,
    link: "/products/3dmapping",
  },
];

export const Data3DMapping: IProduct[] = [
  {
    poster: mapping3d,
    name: "seoul international district",
    src: mapping,
  },
];

// export const Data3DRender: IProduct[] = [
//   { poster:"", name: "TAV OFFICE JAPAN", src: office1 },
//   { poster:"", name: "TAV OFFICE JAPAN", src: office2 },
//   { poster:"", name: "TAV OFFICE JAPAN", src: office3 },
//   { poster:"", name: "TAV OFFICE JAPAN", src: office4 },
//   { poster:"", name: "TAV OFFICE JAPAN", src: office5 },
//   { poster:"", name: "TAV OFFICE JAPAN", src: office6 },
//   { poster:"", name: "TAV OFFICE JAPAN", src: office7 },
//   { poster:"", name: "TAV OFFICE JAPAN", src: office8 },
//   { poster:"", name: "TAV OFFICE JAPAN", src: office9 },
//   { poster:"", name: "TAV LAO CAI", src: laocao1 },
//   { poster:"", name: "TAV LAO CAI", src: laocao2 },
//   { poster:"", name: "TAV LAO CAI", src: laocao3 },
//   { poster:"", name: "TAV LAO CAI", src: laocao4 },
//   { poster:"", name: "TAV LAO CAI", src: laocao5 },
//   { poster:"", name: "TAV LAO CAI", src: laocao6 },
//   { poster:"", name: "TAV VILLAGE CANADA", src: village1 },
//   { poster:"", name: "TAV VILLAGE CANADA", src: village2 },
//   { poster:"", name: "TAV VILLAGE CANADA", src: village3 },
//   { poster:"", name: "TAV VILLAGE CANADA", src: village4 },
//   { poster:"", name: "TAV VILLAGE CANADA", src: village5 },
//   { poster:"", name: "TAV VILLAGE CANADA", src: village6 },
//   { poster:"", name: "TAV VILLAGE CANADA", src: village7 },
//   { poster:"", name: "TAV VILLAGE CANADA", src: village8 },
//   { poster:"", name: "TAV VILLAGE CANADA", src: village9 },
//   { poster:"", name: "TAV VILLAGE CANADA", src: village10 },
//   { poster:"", name: "HOI AN HOME", src: hoian },
// ];

export const Data3DRenderCG: IProduct3[] = [
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20reception.webp?alt=media&token=6c8e5d21-70c1-4701-9111-4e4c512b4b5c",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20terrace.webp?alt=media&token=f224c490-78e2-4fa7-9c6c-73fe9b9a732f",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/icon%2FTAV%20TOWER%20DAY.jpg?alt=media&token=96afe78e-8efd-4be3-be24-ca9f2e58a5c0",
    type: "video",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/icon%2FTAV%20TOWER%20NIGHT.jpg?alt=media&token=cac086cc-1d45-409a-80f9-e945d642b419",
    type: "video",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fngay-dem-1-compressed.mp4?alt=media&token=4829c309-c986-4707-9bf1-b1c3c112d055",
    type: "video",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fngay-dem-3-compressed.mp4?alt=media&token=ffee93a9-875b-4ca4-a822-ff15ca51f7b3",
    type: "video",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fngay-dem-4-compressed.mp4?alt=media&token=fd2cbb52-fa6a-4b63-a40c-c87183ea4756",
    type: "video",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fngay-dem-laocai-compressed.mp4?alt=media&token=7e059c8e-510e-4386-bc74-e0eb55561755",
    type: "video",
  },
  {
    id: "1",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FAS%20VIEW%20GARDEN.webp?alt=media&token=1535a251-5561-4b8b-a568-ca2b01f30a12",
    type: "image",
  },
  {
    id: "2",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FAS%20Vietnamese%20three-room%20house.webp?alt=media&token=e3ffc96c-9a15-42bd-85b5-0987dfe0ccf3",
    type: "image",
  },
  {
    id: "3",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FCity-overview.webp?alt=media&token=afdb1656-58d3-49bd-afa8-221a9072b0d3",
    type: "image",
  },
  {
    id: "4",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FEU%20VIEW%20FOREST.webp?alt=media&token=cc409cba-0435-4837-8a6b-0cbfe910a00d",
    type: "image",
  },
  {
    id: "5",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FEU%20VIEW%20GARDEN%202%20.webp?alt=media&token=7f40fbbb-2d19-4ce5-8196-cb8c265def01",
    type: "image",
  },
  {
    id: "6",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FEU%20VIEW%20GARDEN%203.webp?alt=media&token=2373c2d9-d7c9-46f3-8465-517485a22e24",
    type: "image",
  },
  {
    id: "7",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FEU%20VIEW%20GARDEN%204.webp?alt=media&token=cceea8e7-394e-4d59-9158-feb24666dd82",
    type: "image",
  },
  {
    id: "8",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FEU%20VIEW%20GARDEN%205.webp?alt=media&token=935b4cb0-2f02-412d-9117-1f9b34f4d5d8",
    type: "image",
  },
  {
    id: "9",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FEU%20VIEW%20GARDEN.webp?alt=media&token=0b7f123f-2edf-4eea-88ed-c655694beafb",
    type: "image",
  },
  {
    id: "10",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FEU%20summer.webp?alt=media&token=9a0c2465-9998-4d5a-bead-29d125c36901",
    type: "image",
  },
  {
    id: "11",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FEU%20winter%202.webp?alt=media&token=edeb4e83-1b77-4dcc-ad53-8ab96596d7a1",
    type: "image",
  },
  {
    id: "12",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FEU%20winter.webp?alt=media&token=a814b60c-f205-4553-87cc-b7593e1424a9",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FEU-summer.webp?alt=media&token=3058caad-3910-433b-8b0b-eabf22d144d9",
    type: "image",
  },
  {
    id: "14",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FHoi%20An%20ancient%20town%20night%20scene.webp?alt=media&token=dec6700d-1329-4740-a290-98820cd26e22",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FLAO%20CAI_DAY%201.webp?alt=media&token=8f70d503-17a6-43c8-9014-045365960f4e",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FLAO%20CAI_DAY%202.webp?alt=media&token=532da979-5a37-465d-af06-7cb132fa6481",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FLAO%20CAI_DAY%203.webp?alt=media&token=7e29433d-b7e0-40fc-9801-f003bfae5b55",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FLAOCAI%20DAY.webp?alt=media&token=dc16d499-1273-400b-ac1a-58ea15145269",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FLAOCAI%20NIGHT.webp?alt=media&token=c3472219-b80c-4ccc-b0bd-19467391b50d",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FSanta%20Claus%20living%20room.webp?alt=media&token=d78bb957-c17f-4ee0-9c9a-678b37df9359",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-bathroom%20001.webp?alt=media&token=6f3e6625-c3b0-4c74-a62b-a5f3da97ae5a",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-bathroom%20002.webp?alt=media&token=3c4d8b62-9b0c-4f9a-ad81-5601cf403c7b",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-bathroom%20003.webp?alt=media&token=545f9581-91e3-4a7c-9182-9b039ecdc6e5",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-bathroom%20004.webp?alt=media&token=78ae53ad-7254-4f64-ba54-ad966dc01151",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-bathroom%20005.webp?alt=media&token=b8f71e00-2d98-4259-982e-76bbd41e257b",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-bathroom%20006.webp?alt=media&token=e9823929-6012-4441-ba13-d5e3c651c122",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-kitchen%20001.webp?alt=media&token=602db952-cc8b-4a92-a5a9-85fbb3966191",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-landscape%20001.webp?alt=media&token=e205a325-7b6f-446f-991d-a7feda474f45",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-living%20room%20001.webp?alt=media&token=7f832759-e6bf-4374-830a-22986aee4cca",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-living%20room%20002.webp?alt=media&token=4a73f102-c670-4f9d-a540-cd2d1d57d183",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-living%20room%20003.webp?alt=media&token=d9aa5678-f217-4e11-83cc-3c541cb05642",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-living%20room%20004.webp?alt=media&token=0cd05105-1e21-4d24-bc86-276fc4d01750",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-toilet%20001.webp?alt=media&token=2fa367c6-c4f1-45f9-88c2-4a0d180ef6d7",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-toilet%20002.webp?alt=media&token=299f9dff-c317-4596-bedb-b649da274847",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV-window.webp?alt=media&token=1d1b6823-755d-43ba-ae2a-7150b98acc5d",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20001.webp?alt=media&token=74e1869c-32e9-47c2-ba18-c693c43d206b",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20002.webp?alt=media&token=56516cd1-f7c4-4f00-9b72-ef0c135e2782",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20bedroom%20005.webp?alt=media&token=48613b9e-1d65-4201-a34a-742124d92dc3",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20bedroom%20006.webp?alt=media&token=01b41196-f1c1-46cb-a063-c70b96799dc3",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20bedroom%20007.webp?alt=media&token=a3e3d27f-c17e-431f-9f04-e861fc9d1b71",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20flower.webp?alt=media&token=fe46d785-5cef-43fc-9bde-beffdc6c40bf",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20garden.webp?alt=media&token=fed85aa1-24eb-446d-890f-2cc0fb546780",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20night.webp?alt=media&token=2aba1d1b-3b2a-4026-bf33-f8ff6b2d2ae9",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20ariel%20view.webp?alt=media&token=77e26b58-a8cf-469b-9792-0679251e6832",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20elevator.webp?alt=media&token=f07ba5b0-8e83-4d9e-9562-e59b75703c90",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20entrance%20hall%20002.webp?alt=media&token=2f5f3d7e-779d-47c4-976f-e6bc296397a7",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20entrance%20hall%20sunset.webp?alt=media&token=7b4a615a-99c7-4aca-bac3-d8fcb2e6e7cb",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20lanscape.webp?alt=media&token=f7e4ba0f-0ecc-4ae5-9b4e-298e82611461",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20reception.webp?alt=media&token=6c8e5d21-70c1-4701-9111-4e4c512b4b5c",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20reception.webp?alt=media&token=6c8e5d21-70c1-4701-9111-4e4c512b4b5c",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20river%20view.webp?alt=media&token=9c71d5cf-8a76-4993-8e61-35cc65510de7",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20section.webp?alt=media&token=f8fff4b2-986e-4984-93b0-4d463f3f3cfd",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20terrace.webp?alt=media&token=f224c490-78e2-4fa7-9c6c-73fe9b9a732f",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office.webp?alt=media&token=c72442c6-3590-44d6-9227-f3e9b5c8650a",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20pentfloor%20001.webp?alt=media&token=99863996-c943-4476-a473-4fd3fead3236",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20pentfloor%20002.webp?alt=media&token=7c791fe3-0663-4abe-8cbd-17f67e02d804",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20pool%20001.webp?alt=media&token=a9ac9184-94e6-41a9-bd2b-36c9be9b9519",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20pool%20002.webp?alt=media&token=851fd8e8-db4c-4c6f-a6e8-1b2af4af38a0",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20pool%20003.webp?alt=media&token=eb39b15f-9c89-4022-9ecf-0860baf911f6",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20sunset.webp?alt=media&token=edc5cc28-4d11-463d-b617-8dbf024ca707",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20toilet%20001.webp?alt=media&token=0c4dc149-84d0-45f2-867a-00431749e191",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20toilet%20002.webp?alt=media&token=598c53dd-acaa-46b1-8d95-4e638b79dae4",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fautumn%20forest%20scene.webp?alt=media&token=be3e4a9e-bd50-4eaf-9977-33943db315ee",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Feuropean%20day%20scene1.webp?alt=media&token=69a8e415-42aa-49ad-80ed-15b43264cf66",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Feuropean%20night%20scene.webp?alt=media&token=7502c0f1-966d-4b0e-9191-0f250add3392",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fgarden%20night%20scene.webp?alt=media&token=8947f269-dc3d-485b-9fb6-e7e9ce918cf8",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fluxury%20apartment.webp?alt=media&token=7738167f-7a79-4b8c-9126-85c3ec4ddb14",
    type: "image",
  },
  {
    id: "13",
    name: "interior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fluxury%20living%20room.webp?alt=media&token=03564865-3422-4d69-9f43-9299db93bd0e",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fluxury%20swimming%20pool.webp?alt=media&token=6819a726-cf73-4f72-a61c-9d10791a1cc2",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Frainy%20night%20scene.webp?alt=media&token=09e128be-10eb-47aa-9212-1419037ff826",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fspring%20forest%20scene.webp?alt=media&token=1126ff91-c8c2-460c-ab15-091f7f69c8fd",
    type: "image",
  },
  {
    id: "13",
    name: "exterior",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2Fwaterfall.webp?alt=media&token=24361439-31b9-4cc3-a65b-9e6eed1b6bb0",
    type: "image",
  },
];

export const Data3DRender: IProduct2[] = [
  {
    poster: "",
    name: "TAV OFFICE JAPAN",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20ariel%20view.webp?alt=media&token=77e26b58-a8cf-469b-9792-0679251e6832",
    subMedia: [
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20reception.webp?alt=media&token=6c8e5d21-70c1-4701-9111-4e4c512b4b5c",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20elevator.webp?alt=media&token=f07ba5b0-8e83-4d9e-9562-e59b75703c90",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20entrance%20hall%20002.webp?alt=media&token=2f5f3d7e-779d-47c4-976f-e6bc296397a7",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20entrance%20hall%20sunset.webp?alt=media&token=7b4a615a-99c7-4aca-bac3-d8fcb2e6e7cb",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20lanscape.webp?alt=media&token=f7e4ba0f-0ecc-4ae5-9b4e-298e82611461",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20river%20view.webp?alt=media&token=9c71d5cf-8a76-4993-8e61-35cc65510de7",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20section.webp?alt=media&token=f8fff4b2-986e-4984-93b0-4d463f3f3cfd",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20office%20terrace.webp?alt=media&token=f224c490-78e2-4fa7-9c6c-73fe9b9a732f",
    ],
  },

  {
    poster: "",
    name: "TAV LÀO CAO",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FLAOCAI%20NIGHT.webp?alt=media&token=c3472219-b80c-4ccc-b0bd-19467391b50d",
    subMedia: [
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FLAO%20CAI_DAY%201.webp?alt=media&token=8f70d503-17a6-43c8-9014-045365960f4e",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FLAO%20CAI_DAY%202.webp?alt=media&token=532da979-5a37-465d-af06-7cb132fa6481",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FLAO%20CAI_DAY%203.webp?alt=media&token=7e29433d-b7e0-40fc-9801-f003bfae5b55",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FLAOCAI%20DAY.webp?alt=media&token=dc16d499-1273-400b-ac1a-58ea15145269",
    ],
  },

  {
    poster: "",
    name: "TAV TOWER",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/gif%2F0531_%20VIDEO%2016-9%20rut%20ngan%20.mp4?alt=media&token=0cb96c76-ca7d-48da-9d7c-8da18678b248",
    subMedia: [
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/icon%2FTAV%20TOWER%20DAY.jpg?alt=media&token=96afe78e-8efd-4be3-be24-ca9f2e58a5c0",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/icon%2FTAV%20TOWER%20NIGHT.jpg?alt=media&token=cac086cc-1d45-409a-80f9-e945d642b419",
    ],
  },

  {
    poster: "",
    name: "TAV VILLAGE CANADA",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20pool%20001.webp?alt=media&token=a9ac9184-94e6-41a9-bd2b-36c9be9b9519",
    subMedia: [
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20001.webp?alt=media&token=74e1869c-32e9-47c2-ba18-c693c43d206b",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20002.webp?alt=media&token=56516cd1-f7c4-4f00-9b72-ef0c135e2782",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20bedroom%20005.webp?alt=media&token=48613b9e-1d65-4201-a34a-742124d92dc3",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20bedroom%20006.webp?alt=media&token=01b41196-f1c1-46cb-a063-c70b96799dc3",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20bedroom%20007.webp?alt=media&token=a3e3d27f-c17e-431f-9f04-e861fc9d1b71",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20pentfloor%20001.webp?alt=media&token=99863996-c943-4476-a473-4fd3fead3236",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20pentfloor%20002.webp?alt=media&token=7c791fe3-0663-4abe-8cbd-17f67e02d804",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20pool%20002.webp?alt=media&token=851fd8e8-db4c-4c6f-a6e8-1b2af4af38a0",
      "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/RENDER%203D%20WEBP%2FTAV_villa%20pool%20003.webp?alt=media&token=eb39b15f-9c89-4022-9ecf-0860baf911f6",
    ],
  },

  {
    poster: "",
    name: "HỘI AN HOME",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/gif%2F241113_Rice.mp4?alt=media&token=0b4b46c5-a93e-4af4-9dbf-1d1dc566f430",
    subMedia: [],
  },
  {
    poster: "",
    name: "EU WOODEN HOUSE",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/gif%2FEU%20WOODEN%20HOUSE.jpg?alt=media&token=318139bd-0257-4473-82aa-1d01e7baec6f",
    subMedia: [],
  },
];

export const Data3DModel: IProduct[] = [
  {
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2F1.webp?alt=media&token=ab0f62a3-c0f1-4bf3-b79a-d6ce940c05c9",
  },
  {
    // id: "2",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2F2.1.webp?alt=media&token=e729f7c7-69a7-4bdd-a7bc-2821e34cfb70",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2F2.webp?alt=media&token=a7882b3e-e5c6-48b9-92a9-3ae1ad5108f7",
    // type: "i
    // mage",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2F275891742_2461874970613528_1786306656244444418_n.webp?alt=media&token=dc6af276-e34d-4069-b455-c3008e67701b",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2F4.webp?alt=media&token=4656f18d-2c83-461a-881e-5298a08076cf",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2F5.webp?alt=media&token=7bf97358-4857-4382-a610-8e4a59fb033c",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2F6.webp?alt=media&token=584741c2-c37c-4b42-a8d9-30858ba53977",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2F7.webp?alt=media&token=c8d46963-9f64-4845-a423-f68036bc4bb4",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FDucQuy-Chicago.webp?alt=media&token=f97ed0b9-99ea-4b07-9dec-183f5bf27451",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FDucQuy-Chicago_demo.webp?alt=media&token=b680ecb9-56f7-4e7e-bbc6-9336066bc0d4",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FFOW12795_AOV.webp?alt=media&token=411eaca9-cb2f-45b6-be42-f09a993e77c2",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FG633-42A_01.webp?alt=media&token=4be25a01-e73b-41be-84ca-1a17242bca7e",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FHOEF_1_0283.webp?alt=media&token=18727fd9-cec2-401e-bf1f-4aacf912a95a",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FHOEF_1_0283_02.webp?alt=media&token=537a71b2-791e-4fc0-98b1-0e61b6f1bc51",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FHOEF_1_0284_01.webp?alt=media&token=878adda3-0107-4f3d-9d03-cf092087644e",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FJFI11163_AOV.webp?alt=media&token=535a0137-4ec3-47f7-b4fc-eaa13940afaf",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FJFI11163_RT0001.webp?alt=media&token=d72d2724-9252-4bb6-b370-7cfad46da28b",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FNDCU1280_AOV.webp?alt=media&token=cb8cf0da-9c21-4c75-b45a-02ae45fce04c",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FNDCU1280_RT0000.webp?alt=media&token=c8f836ef-5a8c-4d57-abc7-8115e83c87ee",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FRENDER.webp?alt=media&token=25357510-9261-4bd8-a323-592b9a739643",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FSKU.webp?alt=media&token=d1872cd8-5b3a-4c3d-9902-f50b6e1e21ec",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FSnipaste_2025-01-03_05-47-33.webp?alt=media&token=6e878507-decd-4250-8f49-a15a812697e9",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FSnipaste_2025-01-03_05-48-47.webp?alt=media&token=6acc5d3e-5b3a-4321-bd40-9315402596a6",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FSnipaste_2025-01-03_05-49-39.webp?alt=media&token=b6272911-a722-4843-a563-1dfef0292fe7",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FSnipaste_2025-01-03_05-50-03.webp?alt=media&token=9ad2934a-07ee-420f-a1a2-51b08d8cb8c8",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FSnipaste_2025-01-03_05-50-59.webp?alt=media&token=02b9e20f-e680-4b9b-be99-c02e53af845c",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FSnipaste_2025-01-03_05-51-37.webp?alt=media&token=cb7e05d3-ed83-455f-a93e-e2bcaf4b37d9",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FSnipaste_2025-01-03_05-51-46.webp?alt=media&token=eab5de61-d12b-4868-a04f-5a46c5207e5e",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FSnipaste_2025-01-03_05-52-58.webp?alt=media&token=fe7f534e-0135-464a-8221-e16b609620bc",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_Griller%20001.webp?alt=media&token=3eb25233-c823-405a-9ca3-e57697bfd50f",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_Razer-Woverin.webp?alt=media&token=a22f42ae-264d-4b25-95ed-68d7fa627b7b",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_Wayfair%20002.webp?alt=media&token=64968f54-61a5-4a32-9df2-113583cc1995",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_Wayfair%20003.webp?alt=media&token=3d0d1073-90d5-4789-8d50-8f8d67f3db2d",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_Wayfair%20004.webp?alt=media&token=d85ed389-f3cc-4535-bc8a-8741da91ac53",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_Wayfair%20005.webp?alt=media&token=93cd1ad7-01b5-4239-8671-42d12c7c0a9e",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_Wayfair%20006.webp?alt=media&token=c424b38a-7506-4d00-adde-15e6e98555db",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_Wayfair%20007.webp?alt=media&token=014bb910-5792-4a26-be19-6ae5054bb91f",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_Wayfair%20007.webp?alt=media&token=014bb910-5792-4a26-be19-6ae5054bb91f",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_Wayfair-001.webp?alt=media&token=b6f4f847-848f-4da2-800a-172c9d3f645a",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_chair%20001.webp?alt=media&token=da5e813f-4e14-40a2-9fed-52d138f3bae6",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_chair%20002.webp?alt=media&token=a8166a15-18f0-4211-b146-a763f3b93c46",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_chair%20004.webp?alt=media&token=03d8a4b8-4b63-4521-96c5-0b6683b9fb29",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_chair%20004.webp?alt=media&token=03d8a4b8-4b63-4521-96c5-0b6683b9fb29",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_chair%20005.webp?alt=media&token=7de42625-4424-451d-b2aa-4e82ea87e99e",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_chair%20006.webp?alt=media&token=6fc48e6e-326e-449b-9fea-adf8cbb31012",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_decor%20002.webp?alt=media&token=8426621a-9952-438e-b61c-086f87b3bbdc",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_decor%20002.webp?alt=media&token=8426621a-9952-438e-b61c-086f87b3bbdc",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_decor%20003.webp?alt=media&token=3c5676a2-3b28-44de-a3c2-16fc95acaa81",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_decor%20004.webp?alt=media&token=11c39d72-0104-4cf2-a714-da91b06210c9",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_decor%20005.webp?alt=media&token=be5015e4-8995-4565-87b2-5e4a4482b2bc",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_decor%20006.webp?alt=media&token=6dacb369-f37b-4ade-b283-f298a74e3fbf",
    // type: "image",
  },
  {
    // id: "3",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_decor%20007.webp?alt=media&token=cffc8ac1-eb11-498f-9c21-d2eda72ba68a",
    // type: "image",
  },
  {
    // id: "4",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_decor%20008.webp?alt=media&token=2c75da54-2732-4a89-8b11-71fc823d2632",
    // type: "image",
  },
  {
    // id: "5",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_decor-001.webp?alt=media&token=9c8f7040-718e-4703-b463-d1bae75c31c6",
    // type: "image",
  },
  {
    // id: "6",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_miror%20001.webp?alt=media&token=cdd44b5b-9b4d-4bf4-8c38-60d4ede29e09",
    // type: "image",
  },
  {
    // id: "7",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_modul%20001.webp?alt=media&token=1beaf73d-7585-449d-bb7b-4840cd1b7a37",
    // type: "image",
  },
  {
    // id: "9",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_modul%20002.webp?alt=media&token=637e3742-4ae6-4b71-bf52-a2ef13c2498c",
    // type: "image",
  },
  {
    // id: "10",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_sofa%20001.webp?alt=media&token=b5508a2a-2b03-4a6a-805f-c70b0fbe1978",
    // type: "image",
  },
  {
    // id: "11",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_sofa%20003.webp?alt=media&token=16a61cdc-7fff-4fe8-88f0-b162de554048",
    // type: "image",
  },
  {
    // id: "12",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_sofa-002.webp?alt=media&token=e498b4b1-c99c-435f-a5f9-762d72c37ba6",
    // type: "image",
  },
  {
    // id: "13",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_table%20001.webp?alt=media&token=50b6329c-dca1-429b-afb7-19d669c5ea4f",
    // type: "image",
  },
  {
    // id: "13",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_table%20002.webp?alt=media&token=357dc76e-2f59-4f19-bdca-e238afb0d001",
    // type: "image",
  },
  {
    // id: "13",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTAV_tree%20001.webp?alt=media&token=f45c3be2-484a-4a16-a9aa-7c8574f76e31",
    // type: "image",
  },
  {
    // id: "13",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2FTable.webp?alt=media&token=20d719ee-2733-40b8-9b47-9812b2a630b3",
    // type: "image",
  },
  {
    // id: "13",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2Frender01.webp?alt=media&token=8fb045fa-afd0-440a-b406-d82241264495",
    // type: "image",
  },
  {
    // id: "13",
    name: "",
    poster: "",
    src: "https://firebasestorage.googleapis.com/v0/b/tavgallery-507cd.firebasestorage.app/o/MODEL%203D%20WEBP%2Ftable-1.webp?alt=media&token=e3f9fb70-cf82-415a-99a0-1fc847851b66",
    // type: "image",
  },
];

import vid1 from "../assets/image/product_interactive/1.mp4";
import vid2 from "../assets/image/product_interactive/2.mp4";
import vid3 from "../assets/image/product_interactive/3.mp4";
import vid4 from "../assets/image/product_interactive/4.mp4";
import vid5 from "../assets/image/product_interactive/5.mp4";
import vid6 from "../assets/image/product_interactive/6.mp4";
export const DataInteractiveApp: IProduct[] = [
  { name: "", src: vid1, poster: "" },
  { name: "", src: vid2, poster: "" },
  { name: "", src: vid3, poster: "" },
  { name: "", src: vid4, poster: "" },
  { name: "", src: vid5, poster: "" },
  { name: "", src: vid6, poster: "" },
  // { name: "", src: "", poster: "" },
];
