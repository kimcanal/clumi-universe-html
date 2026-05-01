"use strict";(self.__PLACE_SALT_LOADABLE_LOADED_CHUNKS__=self.__PLACE_SALT_LOADABLE_LOADED_CHUNKS__||[]).push([[8849],{554595:(ot,W,n)=>{n.d(W,{$I:()=>J,A1:()=>Ot,Fu:()=>Q,KC:()=>ut,Rc:()=>_t,U4:()=>rt,W4:()=>nt,_M:()=>N,hO:()=>H,iC:()=>K,kY:()=>Z,md:()=>ct,p:()=>z,pI:()=>mt});var A=n(202784),R=n(234261),Y=n.n(R),h=n(898452),S=n(232175),p=n.n(S),C=n(887249),P=n(495151),f=n(740590),U=n(746192),L=n(326274),v=n(688960),O=n(304009),s=n(397049),a=n(505124),_=n(360560),u=n(844868),t=n(160252),m=n(653398),E=n(662951),r=n(830087),D=n(41904);const N=1,b=3,st=4,H={PRIVATE_ROOM:{value:"\uC77C\uBC18\uAC1D\uC2E4",i18nKey:t.H.PRIVATE_ROOM_HOTEL},SHARED_ROOM:{value:"\uACF5\uC6A9\uAC1D\uC2E4",i18nKey:t.H.SHARED_ROOM_HOTEL},PRIVATE_HOUSE:{value:"\uB3C5\uCC44",i18nKey:t.H.ENTIRE_HOUSE},CAMPING_SITE:{value:"\uCEA0\uD551\uC0AC\uC774\uD2B8",i18nKey:t.H.CAMPSITE},GLAMPING:{value:"\uAE00\uB7A8\uD551",i18nKey:t.H.GLAMPING}},Z={CRUSHED_STONE:{value:"\uD30C\uC1C4\uC11D",i18nKey:t.H.GRAVEL},DECK:{value:"\uB370\uD06C",i18nKey:t.H.DECK},GRASS:{value:"\uC794\uB514",i18nKey:t.H.GRASS},MASATO:{value:"\uB9C8\uC0AC\uD1A0",i18nKey:t.H.MASATO},RIVER_STONE:{value:"\uAC15\uB3CC",i18nKey:t.H.RIVER_STONE},OPEN_FIELD:{value:"\uC77C\uBC18\uB178\uC9C0",i18nKey:t.H.OPEN_FIELD}},z={SITE:{value:"\uCEA0\uD504\uC0AC\uC774\uD2B8",i18nKey:t.H.CAMPSITE},TENT_RENTAL:{value:"\uB300\uC5EC\uD150\uD2B8",i18nKey:t.H.TENT_RENTAL},BUNGALOW:{value:"\uBC29\uAC08\uB85C",i18nKey:t.H.BUNGALOW}},nt={NEXT_TO_SITE:{value:"\uC0AC\uC774\uD2B8\uC606",i18nKey:t.H.NEARBY_CAMPSITE},PARKING_LOT:{value:"\uC8FC\uCC28\uC7A5",i18nKey:t.H.PARKING_LOT}},k=null;function Q(i){const{t:o}=(0,h.$G)();return(0,A.useMemo)(()=>{if(!i||!i.accommodationAdditionalProperty)return null;const{accommodationAdditionalProperty:e,bizItemSubType:l,minBookingTime:c}=i,{checkInTime:d,checkOutTime:I}=e||{},M=(0,m.Bq)(d,"HH:mm"),T=(0,m.Bq)(I,"HH:mm"),y=`${M.formatI18n(o(t.H.A_P_HH_MM,"a/p hh:mm"),o)} ~ ${T.formatI18n(o(t.H.A_P_HH_MM,"a/p hh:mm"),o)}`,G=J({accommodationAdditionalProperty:e},o),V=l!=="ACCOMMODATION_DAY_USE"?null:G?`${G} ${o(t.H.AVAILABLE,"\uC774\uC6A9")}`:y;if(e.roomType==="CAMPING_SITE"){const{roomCompositions:x}=e||{},{campingSiteCompositions:q}=x?.[0]||{},{floorType:B,width:F,height:j}=q?.[0]||{};return[V,Z[B]&&`${o(Z[B]?.i18nKey,Z[B]?.value)}`,F&&j&&`${F}m x ${j}m`,l==="ACCOMMODATION_DAY_USE"?null:`${o(t.H.MINIMUM,"\uCD5C\uC18C")} ${o(t.H.COUNT_NIGHTS,{countText:c,defaultValue:`${c}\uBC15`})}`].filter(Boolean).join(", ")}if(!e.roomCompositions?.[0])return null;const{bathroomCompositions:X,bedroomCompositions:$}=e.roomCompositions[0],g=X?.length||0,tt=$?.length||0,w=$?.reduce((x,q)=>{const{bunkBed:B,kingBed:F,queenBed:j,doubleBed:dt,singleBed:Mt,familyBed:Tt,sofaBed:At}=q||{},Pt=(B||0)+(F||0)+(j||0)+(dt||0)+(Mt||0)+(Tt||0)+(At||0);return x+Pt},0)||0;return[V,tt&&`${o(t.H.BEDROOM_ABBR,"\uCE68\uC2E4")} ${tt}`,w&&`${o(t.H.BED,"\uCE68\uB300")} ${w}`,g&&`${o(t.H.BATHROOM,"\uC695\uC2E4")} ${g}`,l==="ACCOMMODATION_DAY_USE"?null:`${o(t.H.MINIMUM,"\uCD5C\uC18C")} ${o(t.H.COUNT_NIGHTS,{countText:c,defaultValue:`${c}\uBC15`})}`].filter(Boolean).join(", ")},[i,o])}function J(i,o){const{checkInTime:e,checkOutTime:l}=i?.accommodationAdditionalProperty||{};if(!e||!l)return null;const c=(0,m.Bq)(e,"HH:mm"),I=(0,m.Bq)(l,"HH:mm").diffFrom(c)/60;if(I<0)return null;const M=Math.floor(I/60),T=I%60;return T?`${M}${o(t.H.HR,"\uC2DC\uAC04")} ${T}${o(t.H.MIN,"\uBD84")}`:`${M}${o(t.H.HR,"\uC2DC\uAC04")}`}function K({skip:i,size:o}={}){const{businessId:e}=(0,L.Z)(),{isNx:l}=(0,C.O)(),{checkin:c,checkout:d,entry:I,guest:M,roomIds:T}=(0,v.Z)(),y=(0,A.useMemo)(()=>({id:e,isNx:l,checkin:c,checkout:d,entry:I,guest:M,roomIds:T,size:o}),[e,l,c,d,I,M,T,o]),{data:G,LoadingComponent:V,ErrorComponent:X,fetchMore:$}=(0,O.Z)(It,{variables:y,skip:i}),{rooms:g,agencyName:tt,roomTotal:w}=G?.business?.accommodationBookingDetails||{},x=g?.length>0&&w>g.length,q=(0,A.useCallback)(async()=>{x&&await $({variables:{...y,page:Math.ceil(g.length/o)},updateQuery:(B,{fetchMoreResult:F})=>{if(!F)return B;const{rooms:j}=F?.business.accommodationBookingDetails||{};return{...B,business:{...B.business,accommodationBookingDetails:{...B.business.accommodationBookingDetails,rooms:[...B.business.accommodationBookingDetails.rooms,...j]}}}}})},[$,x,g,o,y]);return{...!(0,E.Qr)(g)&&{rooms:g},roomTotal:w,agencyName:tt,hasMore:x,fetchMore:q,LoadingComponent:V,ErrorComponent:X,isFilterSelected:!!(c&&d&&M)}}const et=(0,R.gql)`
  query getVisitorReviewStats($id: String) {
    visitorReviewStatsByBookingBusinessId(input: { bookingBusinessId: $id }) {
      items {
        id
        itemId
        score
        count
      }
    }
  }
`,it=null;function at(){const{business:i}=useBusinessContext(),{bookingBusinessId:o}=i?.naverBooking||{},{data:e}=useData(et,{variables:{id:o}}),l=e?.visitorReviewStatsByBookingBusinessId?.items||it;return React.useMemo(()=>l.reduce((c,d)=>({...c,[d.id]:d}),{}),[l])}function ct(){const i=(0,S.useParams)(),o="resocId",e=i[o],l=i.id,c=e||l,d=(0,s.A)(),{rooms:I,LoadingComponent:M,ErrorComponent:T}=K({skip:d});return!I?.length||M||T?{rooms:I,room:null,LoadingComponent:M,ErrorComponent:T}:{rooms:I,room:I.find(y=>y[o]===Number(c))}}function rt(i,o){const{accommodationAdditionalProperty:e,bizItemSubType:l}=i||{};return!e||l==="ACCOMMODATION_NIGHT"?"":e.roomType==="CAMPING_SITE"||e.roomType==="GLAMPING"?o(t.H.CAMPNIC,"\uCEA0\uD504\uB2C9"):o(t.H.DAY_USE,"\uB370\uC774\uC720\uC988")}function ut({resrvUrl:i="",resocId:o,additionalParams:e={},bookingTab:l="details"}){const c=(0,v.Z)(),{isNxPc:d}=(0,P.E)(),{isNx:I}=(0,C.O)(),{businessId:M}=(0,L.Z)(),T=(0,a.r)(),{deviceType:y,isIOS:G,isNaverMapAppWithBookingTabNavigation:V}=(0,f.C)(),{locale:X}=(0,U.BK)();return A.useMemo(()=>{if(!i)return d?T(`/room/${o}`,{pathParams:{...c,...e}}):{to:(0,r.Ne)(`/accommodation/${M}/room/${o}`,I?{}:{...c,...e})};const{userCouponSeq:$}=c,g=(0,u.dh)({productionUrl:i,isOnlyMobile:!0,params:{tab:l,...$&&{userCouponSeq:$},...G&&V&&{nmapNewWindow:!0}},deviceType:y,locale:X});return d?{href:T("/home",{pathParams:{bookingRedirectUrl:g,forceRedirect:!0}})?.href||""}:{href:g,target:"_self"}},[e,l,M,y,T,G,V,I,d,X,c,o,i])}function _t(){const{t:i}=(0,h.$G)(),o=(0,s.A)(),{rooms:e}=K({skip:o});return(0,A.useMemo)(()=>Array.from(new Set(e?.map(l=>rt(l,i)))).filter(Boolean).sort((l,c)=>c.localeCompare(l)).pop(),[e,i])}function mt(){const{t:i}=(0,h.$G)(),o=_t(),e=[{value:null,i18nName:i(t.H.ALL,"\uC804\uCCB4")},{value:"ACCOMMODATION_NIGHT",i18nName:i(t.H.NIGHT_STAY,"\uC219\uBC15")}];return o&&e.push({value:"ACCOMMODATION_DAY_USE",i18nName:o}),e}const lt=(i,o)=>{const{imageUrl:e}=i;return{photoType:"roomDetailImage",originalUrl:e,imgUrl:e}},Et={type:"roomDetailImage",transform:lt,photos:[]};function Ot(i){const o=A.useMemo(()=>i&&i.length>0?{type:"roomDetailImage",transform:lt,photos:i.map(e=>({imageUrl:e}))}:Et,[i]);return(0,_.L6)(o)}const It=(0,R.gql)`
  query bookingDetails(
    $id: String!
    $isNx: Boolean
    $checkin: String
    $checkout: String
    $entry: String
    $guest: String
    $roomIds: String
    $size: Int
    $page: Int = 0
  ) {
    business: placeDetail(input: { id: $id, isNx: $isNx, deviceType: "mobile" }) {
      accommodationBookingDetails(checkin: $checkin, checkout: $checkout, entry: $entry, roomIds: $roomIds, guest: $guest, size: $size, page: $page) {
        ...AccommodationBookingDetails
      }
    }
  }
  ${D.FK}
`},588152:(ot,W,n)=>{n.d(W,{W:()=>R,_:()=>Y});var A=n(503886);function R(h){const{hairStyles:S,nailStyles:p}=h||{},{styles:C,stylesTotal:P}=S||{},{styles:f,stylesTotal:U}=p||{},L=C?.length>0?C:f,v=P>0?P:U;return{styles:(0,A.be)(L||[],(O,s)=>O.styleNum===s.styleNum),stylesTotal:v||0}}function Y(h){const{beautyBookingProducts:S,stylists:p,naverBooking:C}=h||{},P=S?.length>0,U=!(p?.items?.length>0||P),{naverBookingPromotion:L}=C||{};return U?null:L}},360560:(ot,W,n)=>{n.d(W,{IW:()=>f,L6:()=>C,az:()=>O});var A=n(202784),R=n(503886),Y=n(720212),h=n(701219);const S=(s,a)=>{const _=[{...a}];return a.subContents?.length>0&&(_[0].subContents=[],_.push(...a.subContents.map(({origin:u,thumbnail:t,videoId:m,videoUrl:E,trailerUrl:r,thumbnailRatio:D,mediaType:N})=>({...a,subContents:[],imgUrl:t,originalUrl:u,option:{thumbnailRatio:D},video:{videoId:m,videoUrl:E,trailerUrl:r},mediaType:N})))),s.push(..._),s},p=[];function C(s){return(0,A.useMemo)(()=>{if(!s)return p;let _=1;const u=[];return(0,R.VL)(s).filter(t=>t).map(t=>{const{photos:m=p,transform:E}=t;return m.map(E).map(Y.cc).reduce(S,[]).filter(r=>r.imgUrl&&r.originalUrl).forEach(r=>{const D={...r,id:`${r.photoType}_${_}`,no:_};_+=1,u.push(D)})}),u},[s])}const P={width:750,type:"adaptingFree"};function f({imageList:s,feedId:a=0,title:_="",text:u,date:t}){if(!s)return[];const m=s.filter(({images:E,thumbnail:r})=>a?!!r:E&&E.length>0&&!!E[0]);return m.length===0?[]:a?m.reduce((E,{thumbnail:r,header:D,videoUrl:N},b)=>(E.push(U({index:b,id:a,url:r,videoId:D.vid,title:_,videoUrl:N,text:u,date:t})),E),[]):m.reduce((E,{id:r,images:D})=>E.concat(D.map((N,b)=>U({index:b,id:r,url:N,prevLength:E.length}))),[])}function U({index:s,id:a,url:_,prevLength:u=0,videoId:t="",title:m="",videoUrl:E="",text:r="",date:D=""}){return{no:u+s+1,id:`${a}_${s}`,originalUrl:_,text:r,date:D,title:m,imgUrl:(0,h.gu)(_,P),video:{videoId:t,videoUrl:E}}}function L({photoSources:s,filter:a}){return s.reduce((_,u)=>a&&u.type!==a?_:_+u.photos.length,0)}const v=s=>a=>{const{imageUrl:_,title:u}=a;return{photoType:s,originalUrl:_,imgUrl:_,title:u}};function O(s,a){const _=(0,A.useMemo)(()=>({type:a,transform:v(a),photos:s?.length>0?s:[]}),[s,a]);return C(_)}},738849:(ot,W,n)=>{n.d(W,{$B:()=>f,m6:()=>v,p$:()=>L});var A=n(202784),R=n(898452),Y=n(554595),h=n(588152),S=n(397049),p=n(160252);const C={total:0,filters:{items:[],types:[]},score:0},P={hairshop:{value:"\uC2A4\uD0C0\uC77C\uB9AC\uC2A4\uD2B8/\uC0C1\uD488 \uC804\uCCB4",i18nKey:p.H.STYLIST_PRODUCTION_ALL},nailshop:{value:"\uC2A4\uD0C0\uC77C\uB9AC\uC2A4\uD2B8/\uC0C1\uD488 \uC804\uCCB4",i18nKey:p.H.STYLIST_PRODUCTION_ALL},accommodation:{value:"\uAC1D\uC2E4/\uC0AC\uC774\uD2B8 \uC804\uCCB4",i18nKey:p.H.ROOM_CAMPSITE_ALL}};var f;(function(O){O.list="list",O.photoView="photoView"})(f||(f={}));const U=O=>`
  ${["hairshop","nailshop"].includes(O)&&`
      stylists {
        id
        businessId
        name
        isNPayUsed
        desc
        precautionMessage
        url
        bookingUrl
        imageUrl
        type
        bookingTimeUnit
        hairMentorUrl
      }
      bookingProducts {
        id
        businessId
        name
        isNPayUsed
        desc
        precautionMessage
        url
        bookingUrl
        imageUrl
        type
        bookingTimeUnit
      }
      styles {
        title
        updated
        styleNum
        styleDesc
        unsortedIndex
        category
        categoryString
        gender
        stylistNickName
        stylistPosition
        reprImage
        index
        images {
          height
          width
          imageRep
          imageUrl
          imagesDesc
        }
        imageCount
        styleOptions {
          num
          name
          type
        }
        faceOptions {
          num
          name
        }
        designOptions {
          num
          name
        }
      }
    `||""}
`;function L({business:O,businessType:s,reviewType:a,reviewItem:_}){const u=(0,S.A)(),{t}=(0,R.$G)(),{rooms:m}=(0,Y.iC)({skip:u||!(/accommodation/.test(s)&&_)});return(0,A.useMemo)(()=>{let r=[];if(!(O&&O.base))return r;const{beautyBookingProducts:D,stylists:N,naverBooking:b}=O,{bookingBusinessId:st}=b||{};if(/hairshop|nailshop/i.test(s)){const H=N?.items||[],Z=(H||[]).some(k=>k.businessId),z=st?(Z&&H||[]).concat(D||[]):a==="ugc"?H:[];if(!(z&&z.length>0))return r;if(r=[{id:a==="ugc"?"noQuery":"0",name:t(P[s].i18nKey,P[s].value)}],a!=="ugc")return r.concat(z.map(k=>({...k,id:k.id.toString()})));const{styles:nt}=(0,h.W)(O);r=r.concat(z.map(({id:k,name:Q})=>{let J=Q;return nt.some(({stylistNickName:K,stylistPosition:et})=>{if(K&&Q.includes(K)){const at=(K?.replace(/\s/g,"")+(et||"")).replace(/\s/g,"");if(Q.replace(/\s/g,"")===at)return J=K,!0}return!1}),{id:k.toString(),name:Q,queryName:J}}))}return/accommodation/i.test(s)?m?.length>0?[{id:"0",name:t(P[s].i18nKey,P[s].value)},...m.map(H=>({...H,id:H.resocId.toString(),name:H.resocName}))]:[]:r},[O,s,a,m,t])}const v=/restaurant|hairshop|nailshop|accommodation/}}]);
