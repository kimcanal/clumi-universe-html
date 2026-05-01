"use strict";(self.__PLACE_SALT_LOADABLE_LOADED_CHUNKS__=self.__PLACE_SALT_LOADABLE_LOADED_CHUNKS__||[]).push([[1904],{41904:(ze,e,t)=>{t.d(e,{$N:()=>Qe,$R:()=>m,$x:()=>$,AF:()=>Ie,A_:()=>ke,BI:()=>z,BL:()=>We,Bm:()=>He,D:()=>q,DM:()=>fe,DV:()=>ie,Dt:()=>ue,E2:()=>l,EB:()=>Xe,EE:()=>Me,EJ:()=>pe,FK:()=>W,GV:()=>Ce,HX:()=>we,Hb:()=>Fe,IR:()=>I,JR:()=>ne,KS:()=>Oe,Kv:()=>re,L2:()=>k,Ld:()=>Ne,Mg:()=>c,Oi:()=>Ye,Ol:()=>ye,P2:()=>n,PN:()=>Z,Pf:()=>r,Pr:()=>i,Qh:()=>Y,Qx:()=>x,Qy:()=>Ke,R_:()=>R,Ry:()=>A,S0:()=>T,SY:()=>Ee,Sr:()=>C,T1:()=>p,T2:()=>D,UK:()=>ve,Uh:()=>te,Ui:()=>y,V2:()=>_,Vx:()=>oe,WW:()=>ge,Wt:()=>be,Wu:()=>se,XF:()=>De,Y_:()=>ee,Yp:()=>o,Yr:()=>Be,ZS:()=>K,Zg:()=>H,_3:()=>Te,_S:()=>ae,aM:()=>w,ar:()=>j,bC:()=>_e,dD:()=>xe,de:()=>P,e5:()=>U,eK:()=>s,eQ:()=>de,f:()=>G,fN:()=>X,fn:()=>Re,ht:()=>g,i1:()=>J,ii:()=>Q,jt:()=>me,l$:()=>le,lZ:()=>u,mF:()=>Ve,mL:()=>F,n0:()=>N,oC:()=>v,oG:()=>Le,po:()=>E,pu:()=>Ae,qB:()=>M,qh:()=>d,qn:()=>B,sb:()=>S,tm:()=>O,ut:()=>b,v4:()=>L,vB:()=>a,vG:()=>qe,vp:()=>he,wR:()=>Se,x6:()=>f,x8:()=>Ge,xD:()=>V,yO:()=>ce,z:()=>Pe,zA:()=>Ue,zO:()=>h});const je=null,o=`
  fragment FsasReviews on FsasReviewsResult {
    total
    maxItemCount
    items {
      name
      type
      typeName
      url
      home
      id
      title
      rank
      contents
      bySmartEditor3
      hasNaverReservation
      thumbnailUrl
      thumbnailUrlList
      thumbnailCount
      date
      isOfficial
      isRepresentative
      profileImageUrl
      isVideoThumbnail
      reviewId
      authorName
      createdString
      bypassToken
      buyWithMyMoneyType
    }
  }
`,i=`
  fragment NluFields on Nlu {
    queryType
    user {
      gender
    }
    queryResult {
      ptn0
      ptn1
      region
      spot
      tradeName
      service
      selectedRegion {
        name
        index
        x
        y
      }
      selectedRegionIndex
      otherRegions {
        name
        index
      }
      property
      keyword
      queryType
      nluQuery
      businessType
      cid
      branch
      franchise
      titleKeyword
      location {
        x
        y
        default
        longitude
        latitude
        dong
        si
      }
      noRegionQuery
      priority
      showLocationBarFlag
      themeId
      filterBooking
      repRegion
      repSpot
      dbQuery {
        isDefault
        name
        type
        getType
        useFilter
        hasComponents
      }
      type
      category
      menu
      context
    }
  }
`,n=`
  fragment VisitorReviewStats on VisitorReviewStatsResult {
    id
    name
    review {
      avgRating
      totalCount
      scores {
        count
        score
      }
      imageReviewCount
      authorCount
    }
    analysis {
      themes {
        code
        label
        count
      }
      menus {
        label
        count
      }
      votedKeyword {
        totalCount
        reviewCount
        userCount
        details {
          category
          code
          iconUrl
          iconCode
          displayName
          count
          previousRank
        }
      }
    }
    visitorReviewsTotal
    ratingReviewsTotal
  }
`,a=`
  fragment SubwayStations on SubwayStation {
    no
    name
    type
    typeDesc
    color
    priority
    transfers {
      no
      name
      type
      color
      priority
    }
    station {
      id
      name
      displayName
      lat
      lng
      nearestExit
      nearestExitType
      walkTime
      walkingDistance
    }
  }
`,r=`
  fragment BusStation on BusStation {
    id
    name
    displayCode
    lat
    lng
    innerRoutes {
      routeType {
        type
        typeName
        innerRoute {
          id
          name
        }
      }
    }
    walkTime
    walkingDistance
  }
`,s=`
  fragment OptionsForMap on OptionsForMap {
    maxZoom
    minZoom
    includeMyLocation
    maxIncludePoiCount
    center
    spotId
    keepMapBounds
  }
`,l=`
  fragment OtherBusinesses on OtherBusinessesResult {
    total
    items {
      name
      id
      hasBooking
      commonAddress
      virtualPhone
      phone
      description
      routeUrl
      isDelivery
      isSmartOrder
      microReview
      x
      y
      category
    }
  }
`,c=`
  fragment KinQna on KinQna {
    answerCount
    answerList {
      detailUrl
      writeTime
      contents
      questionTitle
      thumbnailUrl
      dirId
    }
    profileUrl
  }
`,d=`
  fragment NewBusinessHours on NewBusinessHour {
    name
    businessStatusDescription {
      status
      blindDescription
      description
      showEndsNextDay
    }
    businessHours {
      day
      businessHours {
        start
        end
      }
      breakHours {
        start
        end
      }
      description
      lastOrderTimes {
        type
        time
      }
      showEndsNextDay
    }
    comingIrregularClosedDays {
      name
      startDate
      endDate
      displayInShowMore
    }
    comingRegularClosedDays
    freeText
  }
`,m=`
  fragment ReverseGeocodingAddr on ReverseGeocodingResult {
    rcode
    region
  }
`,u=`
  fragment NxMapMarkerFields on BusinessSummary {
    id
    name
    category
    x
    y
    imageUrl
  }
`,Ze=null,g=`
  fragment PlaceAccessorBanner on PlaceAccessorBanner {
    promotionSeq
    displayOrder
    activeStartDateTime
    activeEndDateTime
    promotionDetail {
      title {
        first
        second
      }
      subtext
      images {
        url
        suffix
        width
        height
      }
      buttons {
        phrase
        url
      }
      bgColor {
        rgb
      }
      target{
        placeIds
        categoryIds
      }
    }
  }
`,p=`
  fragment PlaceDetailBase on PlaceDetailBase {
    id
    name
    reviewSettings {
      keyword
      blog
      cafe
      showVisitorReviewScore
    }
    siteId
    road
    conveniences
    category
    categoryCode
    categoryCodeList
    defaultCategoryCodeList
    categoryCount
    rcode
    roadAddress
    address
    streetPanorama {
      id
      pan
      tilt
      lon
      lat
      fov
    }
    isKtis
    visitorReviewsTotal
    visitorReviewsScore
    missingInfo {
      businessType
      isBizHourMissing
      isMenuImageMissing
      isAccessorMissing
      isDescriptionMissing
      isConveniencesMissing
      needLargeSuggestionBanner
      isBoss
    }
    hideBusinessHours
    hidePrice
    microReviews
    paymentInfo
    openingHours {
      day
      isDayOff
      schedule {
        name
        descriptions
        isDayOff
      }
    }
    isGoodStore
    coordinate {
      x
      y
      mapZoomLevel
    }
    poiInfo {
      polyline {
        shapeType
        shapeKey {
          id
          name
          version
        }
        boundary {
          minX
          minY
          maxX
          maxY
        }
        details {
          totalDistance
          departureAddress
          arrivalAddress
          departureCoordX
          departureCoordY
          arrivalCoordX
          arrivalCoordY
        }
      }
      land {
        shapeType
        shapeKey {
          id
          name
          version
        }
      }
      polygon {
        shapeType
        shapeKey {
          id
          name
          version
        }
      }
      relation {
        shapeType
        shapeKey {
          id
          name
          version
        }
        details {
          type
          sid
          fullName
          name
          category
          x
          y
        }
      }
      parentRelation {
        shapeType
      }
    }
    routeUrl
    virtualPhone
    phone
    hasMobilePhoneNumber
    talktalkUrl
    chatBotUrl
    naverBlog {
      id
      categoryNo
    }
    visitorReviewsTextReviewTotal
    beLocalWeek
    indoorInfo {
      name
      isRepresent
      zoneId
      indoorId
      floor
      floorText
      zOrder
    }
  }
`,y=`
  fragment ShopWindow on ShopWindow {
    total
    naverPayYn
    sales {
      dayOff
      weekend
      weekdays
    }
    description
    itemsFromChannelNo {
      channelProductNo
      productName
      representImageUrl
      salePrice
      discountedSalePrice
      mobileDiscountedSalePrice
      productEndUrl
      mobileProductEndUrl
      payExposure
      brandName
      totalReviewCount
      averageReviewScore
      deliveryFee
      installationFee
    }
    itemsFromInterlockId {
      channelProductNo
      productName
      representImageUrl
      salePrice
      discountedSalePrice
      mobileDiscountedSalePrice
      productEndUrl
      mobileProductEndUrl
      payExposure
      brandName
      totalReviewCount
      averageReviewScore
      deliveryFee
      installationFee
    }
    branchNews {
      bbsId
      imageUrl
      bbsTitle
      contentText
      inspectionDate
      contentEndUrl
      mobileContentEndUrl
    }
    url
    typeName
    branchYn
    isTraditionalMarket
    homepages {
      etc {
        url
        landingUrl
        isDeadUrl
        type
        order
        isRep
      }
      repr {
        url
        landingUrl
        isDeadUrl
        type
        order
        isRep
      }
    }
    businessHours {
      index
      day
      isDayOff
      startTime
      endTime
      hourString
      description
    }
  }
`,Je=null,f=`
  fragment BrandPromotion on BrandPromotion {
    promotionMobileUrl
    promotionType
    promotionDetail
    promotionSdayOfWeek
    brandDirNum
    brandPcUrl
    promotionPcUrl
    promotionImage
    promotionEdayOfWeek
    brandMobileUrl
    promotionEdate
    brandLogoImage
    brandPhone
    sDate
    promotionSdate
    promotionPlaceImage
    promotionDetailColor
    eDate
    brandTitle
    status
  }
`,h=`
  fragment HasCoupon on HasCoupon {
    count
  }
`,T=`
  fragment HasFeed on HasFeed {
    blogExist
    feedExist
  }
`,I=`
  fragment VisitorReviews on VisitorReviewsResult {
    items {
      id
      reviewId
      rating
      author {
        id
        nickname
        from
        imageUrl
        borderImageUrl
        objectId
        url
        review {
          totalCount
          imageCount
          avgRating
        }
        theme {
          totalCount
        }
        apolloCacheId
        isFollowing
        followerCount
        followRequested
      }
      body
      thumbnail
      media {
        type
        thumbnail
        thumbnailRatio
        class
        videoId
        videoUrl
        trailerUrl
      }
      tags
      status
      visitCount
      viewCount
      visited
      visitedDate
      created
      reply {
        editUrl
        body
        editedBy
        created
        date
        status
        replyTitle
        isReported
        isSuspended
      }
      themes {
        theme
        pattern
        category
        offsetStart
        offsetEnd
        similarity
        miningValue
      }
      originType
      item {
        name
        code
        options
      }
      language
      translatedText
      bookingItemName
      bookingItemOptions
      businessName
      showBookingItemName
      showBookingItemOptions
      votedKeywords {
        code
        iconUrl
        iconCode
        name
      }
      userIdno
      isFollowing
      followerCount
      followRequested
      loginIdno
      apolloCacheId
      receiptInfoUrl
      showPaymentInfo
      reactionStat {
        id
        typeCount {
          name
          count
        }
        totalCount
      }
      hasViewerReacted {
        id
        reacted
      }
      nickname
      highlightOffsets
    }
    starDistribution {
      score
      count
    }
    hideProductSelectBox
    total
    score
    showRecommendationSort
    itemReviewStats {
      itemId
      count
      score
    }
  }
`,C=`
  fragment CPImages on CPImages {
    total
    images {
      origin
      url
      infoTitle
      infoUrl
      source
      date
    }
  }
`,S=`
  fragment BusinessTools on BusinessTools {
    tools {
      type
      title
      countInString
      description
      link
      using
    }
    hideAnnouncement
  }
`,$e=null,b=`
  fragment DetailExcludeTargets on DetailExcludeTargets {
    image
    imageSection
    review
    clip
    imageDate
  }
`,_=`
  fragment PlaceDetailNaverBooking on PlaceDetailNaverBooking {
    bookingBusinessId
    naverBookingUrl
    bookingDisplayName
    bookingButtonName
    bookingHubButtonName
    naverBookingHubUrl
    naverBookingPromotion {
      title
      category
      feedId
      period
    }
    promotionTitle
    nPayPromotion
    hasSmartOrder
  }
`,v=`
  fragment BroadcastInfo on BroadcastInfo {
    channel
    program
    episode
    date
    menu
    tvcast
  }
`,k=`
  fragment Cesco on Cesco {
    cescoCheck
    cescoLink {
      pc
      mobile
    }
    cescofsCheck
    cescofsLink {
      pc
      mobile
    }
  }
`,P=`
  fragment PackagePickup on PackagePickup {
    isPossible
    url
  }
`,R=`
  fragment Gift on Gift {
    gifticonId
    gifticonMoreUrl
  }
`,N=`
  fragment HospitalInfo on HospitalInfo {
    nightChildTreat
    dayERTel
    isDayERAvailable
    nightERTel
    isNightERAvailable
    lunchSat
    lunchWeek
    holidayTreat
    sundayTreat
    saturdayHours
    weekdayHours
    subjects
    specialOperations
    specialSubjects
    specialEquipments {
      count
      name
      code
    }
    processedSubjects {
      specialties {
        count
        name
        code
      }
      others {
        count
        name
        code
      }
    }
    sortedSubjects {
      count
      name
      code
    }
    isSpecialistInfoHidden
    exclServiceInfo {
      name
      count
    }
    ext_key
  }
`,E=`
  fragment RecentBlogPost on RecentBlogPost {
    isPostExists
    postList {
      logNo
      blogId
      title
      commentCnt
      addDate
      linkUrl
      thumbnailUrl
      thumbnailCount
      directorySeq
    }
  }
`,D=`
  fragment VaccineQuantityDetailResult on VaccineQuantityDetailResult {
    vaccineOrganizationCode
  }
`,O=`
  fragment Directories on Directories {
    validTabs {
      default
      restaurant
      shopping
      amusement
      etc
      hospitalAffiliatedFacility
      hospitalSupport
      hospitalConvenienceFacility
      hospitalRestaurantCafe
    }
    total
    items {
      id
      dbType
      name
      businessCategory
      category
      description
      hasBooking
      hasNPay
      x
      y
      distance
      imageUrl
      imageCount
      phone
      virtualPhone
      routeUrl
      streetPanorama {
        id
        pan
        tilt
        lon
        lat
        fov
      }
      roadAddress
      address
      commonAddress
      blogCafeReviewCount
      bookingReviewCount
      totalReviewCount
      bookingUrl
      bookingBusinessId
      talktalkUrl
      detailCid {
        c0
        c1
        c2
        c3
      }
      options
      promotionTitle
      agencyId
      businessHours
      markerLabel {
        text
        style
        stylePreset
      }
      markerId
      imageMarker {
        marker
        markerSelected
      }
      newOpening
      broadcastInfo {
        program
      }
      microReview
      tags
      isAttraction
      isDirectory
      isDelivery
      isTakeOut
      isPreOrder
      isTableOrder
      bookingPickupId
      bookingVisitId
      bookingHubUrl
      isCvsDelivery
      imageSrc
      desc
      roadAddr
    }
    countDirectories {
      restaurant
      shopping
      amusement
      etc
      hospitalAffiliatedFacility
      hospitalSupport
      hospitalConvenienceFacility
      hospitalRestaurantCafe
    }
  }
`,U=`
  fragment GeneralHospital on GeneralHospital {
    expose
    extkey
    facilities {
      id
      name
      type
      expose
      coordinates
    }
  }
`,A=`
  fragment WeatherInfo on WeatherInfo {
    day
    monthDate
    minTemperature
    maxTemperature
    amWeatherText
    pmWeatherText
    amRainProbability
    pmRainProbability
    amIconNumber
    pmIconNumber
  }
`,L=`
  fragment XGolfTVcast on XGolfTVcast {
    tvcast
  }
`,B=`
  fragment GolfBooking on GolfBooking {
    bookingId
    itemId
    bookingUrl
    agencyName
    agencyUrl
    display
    isAffiliateBooking
  }
`,w=`
  fragment GolfFnb on GolfFnb {
    clubhouseMenus {
      menus {
        price
        name
        dynamic
        recommended
      }
      menuImages
      clubhouseId
      clubhouseName
    }
    shadehouseMenus {
      name
      foods {
        price
        name
        dynamic
        recommended
      }
      drinks {
        price
        name
        dynamic
        recommended
      }
      menuImages
    }
  }
`,M=`
  fragment GolfCourseHole on GolfCourseHole {
    courseImages {
      no
      viewId
      id
      imgUrl
      imgDesc
      title
      text
      link
      date
      author {
        id
        nickname
        from
        imageUrl
        objectId
        url
        borderImageUrl
      }
      playCount
      likeCount
      photoType
      video {
        videoId
        videoUrl
      }
    }
    courseInfo {
      desc
      hole
      courseLengths {
        meter
        yards
        rank
        name
        holeCount
        percentileLabel
      }
      rank
      grassInfo {
        fairway
        green
      }
    }
    courseScore {
      total
      avg
      man
      woman
    }
    courseDifficulty {
      course
      fairway
      green
      avg {
        course
        fairway
        green
      }
    }
    kgaCourseRatings {
      coursePairName
      courseRatingMale
      slopeRatingMale
      courseRatingFemale
      slopeRatingFemale
    }
    courseList {
      name
      holeList {
        holeNumber
        holemap {
          viewId
          par
          handicap
          imgUrl
          originalUrl
          title
          text
          photoType
        }
        holeScore {
          avg
          man
          woman
        }
        tee {
          avgDistance {
            yards
            meter
          }
          list {
            name
            yards
            meter
          }
        }
        holeDesc
      }
    }
  }
`,x=`
  fragment SmartScoreReview on SmartScoreReview {
    normal {
      total
      course
      green
      food
      pr
      service
      holeCount
      goodCategory
    }
    public {
      total
      course
      green
      food
      pr
      service
      holeCount
      goodCategory
    }
    private {
      total
      course
      green
      food
      pr
      service
      holeCount
      goodCategory
    }
  }
`,H=`
  fragment ParkingLot on ParkingLot {
    name
    category
    address
    roadAddress
    distance
    lat
    lng
    placeId
    description
    menus
  }
`,F=`
  fragment Naverhotel on Naverhotel3 {
    extkey
    hotelData {
      checkIn
      checkOut
      checkInStr
      checkOutStr
      taAwards {
        awardYear
        awardType
      }
      taHotelUrl
      bkPCHotelUrl
      bkHotelRating
      taHotelRating
      bkMobileHotelUrl
      starRating
      starRatingType
      starRatingDate
      overallRating
      hcMinRateKRW
      serviceUrl
      facilityData {
        iconFacilities {
          name
          iconImageUrl
          darkModeIconImageUrl
        }
        facilitiesGroups {
          groupName
          facilities
        }
      }
    }
  }
`,G=`
  fragment School on School {
    extkey
    schoolType
    schoolData {
      schoolinfo {
        HMPG_ADRES
        FOND_SC_CODE
        studentGenderNum {
          SUM
          COL_MSUM
          COL_WSUM
        }
        teacherNum {
          COL_S
          COL_SM
          COL_SW
        }
        studentGradeNum {
          COL_1
          COL_2
          COL_3
          COL_4
          COL_5
          COL_6
          COL_C1
          COL_C2
          COL_C3
          COL_C4
          COL_C5
          COL_C6
        }
        schoolfood {
          MLSV_YMD
          MMEAL_SC_NM
          DDISH_NM
        }
      }
      childcare {
        CLASS_CNT_00
        CLASS_CNT_01
        CLASS_CNT_02
        CLASS_CNT_03
        CLASS_CNT_04
        CLASS_CNT_05
        CLASS_CNT_M2
        CLASS_CNT_M5
        CLASS_CNT_SP
        CLASS_CNT_TOT
        CHILD_CNT_00
        CHILD_CNT_01
        CHILD_CNT_02
        CHILD_CNT_03
        CHILD_CNT_04
        CHILD_CNT_05
        CHILD_CNT_M2
        CHILD_CNT_M5
        CHILD_CNT_SP
        CHILD_CNT_TOT
        nrtroomcnt
        plgrdco
        crcargbname
        teacher_childcare
        crspec
        EM_CNT_0Y
        EM_CNT_1Y
        EM_CNT_2Y
        EM_CNT_4Y
        EM_CNT_6Y
        EM_CNT_A1
        EM_CNT_A2
        EM_CNT_A3
        EM_CNT_A4
        EM_CNT_A5
        EM_CNT_A6
        EM_CNT_A7
        EM_CNT_A8
        EM_CNT_A10
        EM_CNT_TOT
        crhome
      }
      kindergarten {
        clcnt3
        clcnt4
        clcnt5
        ppcnt3
        ppcnt4
        ppcnt5
        mixclcnt
        shclcnt
        owcnt
        ag3fpcnt
        ag4fpcnt
        ag5fpcnt
        mixppcnt
        shppcnt
        prmstfcnt
        crcnt
        vhcl_oprn_yn
        teacher_kdg
        child_kdg
        yy1_undr_thcnt
        yy1_abv_yy2_undr_thcnt
        yy2_abv_yy4_undr_thcnt
        yy4_abv_yy6_undr_thcnt
        yy6_abv_thcnt
        drcnt
        adcnt
        hdst_thcnt
        asps_thcnt
        gnrl_thcnt
        spcn_thcnt
        ntcnt
        ntrt_thcnt
        shcnt_thcnt
        incnt
        hpaddr
      }
    }
  }
`,V=`
  fragment Motel on Motel {
    extKey
    motelData {
      showPriceComparison
      facilities
    }
  }
`,K=`
  fragment Sites on Sites {
    subLinks {
      title
      url
      nclicksAction
    }
    etc {
      type
      landingUrl
      gdid
    }
    url
    landingUrl
    gdid
  }
`,Y=`
  fragment FestivalPerformance on FestivalPerformance {
    headInfo
    festivalSectionHeadInfo
    festivalsTotal
    festivals {
      id
      reserveUrl
      date
      authName
      prices
      image
      name
      message
      category
      time
    }
    performancesTotal
    performances {
      id
      title
      reserveUrl
      image
      start
      end
      message
      genre
      viewLevel
      hours
      ticketUrlM
      ticketUrlPc
      performStatus
      keyword
    }
  }
`,W=`
  fragment AccommodationBookingDetails on AccommodationBookingDetails {
    roomTotal
    siteDesc
    agencyName
    images
    businessTypeId
    rooms {
      reprUrl
      resrvUrl
      drtOptionList {
        iconName
        optionName
      }
      isBookable
      isMatching
      bookingType
      resocId
      resocName
      resocDesc
      cond2Val
      cond3Val
      subImage
      excptMsg
      minPrice
      maxPrice
      index
      todayDealRate
      discountText
      priceInfo {
        off_friday
        off_weekday
        off_weekend
        on_friday
        on_weekday
        on_weekend
        peak_friday
        peak_weekday
        peak_weekend
      }
      isNPayUsed
      nPayRegStatusCode
      bizItemSubType
      minBookingTime
      accommodationAdditionalProperty {
        checkInTime
        checkOutTime
        isFixedRoomComposition
        roomCompositions {
          name
          bedroomCompositions {
            name
            type
            bunkBed
            kingBed
            queenBed
            doubleBed
            singleBed
            beddingSet
            familyBed
            sofaBed
            isStudioRoom
          }
          bathroomCompositions {
            name
            isPrivate
          }
          campingSiteCompositions {
            name
            type
            width
            height
            floorType
            isCaravanAccessible
            isTrailerAccessible
            parkingPositionType
          }
        }
        roomType
      }
    }
  }
`,q=`
  fragment BeautyMenuByCategory on BeautyMenuByCategory {
    name
    items {
      name
      price
      recommend
      priceType
      id
      index
    }
  }
`,X=`
  fragment AdditionalPrice on AdditionalPrice {
    priceType
    price
  }
`,Q=`
  fragment StylistsResult on StylistsResult {
    items {
      id
      businessId
      name
      isNPayUsed
      postPaid
      desc
      precautionMessage
      url
      bookingUrl
      imageUrl
      type
      bookingTimeUnit
      position
      positionEtc
      hairMentorUrl
      revisitCategory
      isRevisitStylist
      popularStyleCategory
      popularStyleCount
      beautyStyleNums
    }
    total
  }
`,z=`
  fragment BeautyStyle on BeautyStyle {
    styleNum
    styleDesc
    title
    updated
    unsortedIndex
    index
    reprImage
    category
    categoryString
    faceOptions {
      num
      name
    }
    designOptions {
      num
      name
    }
    styleOptions {
      bookingCount
      reviewCount
      num
      name
      type
      isPopular
      totalCount
    }
    colorOptions {
      num
      name
    }
    styleOptionsCount
    faceOptionCount
    colorOptionCount
    designOptionCount
    personNum
    stylistNickName
    stylistPosition
    gender
    imageCount
    images {
      height
      width
      imageRep
      imageUrl
      imagesDesc
    }
    isPopular
  }
`,j=`
  fragment MyStyleInfo on MyStyleInfo {
    styleBookingCounts {
      name
      styleNum
      count
      isPopular
    }
    popularStyle {
      name
      styleNum
    }
  }
`,Z=`
  fragment BookingItem on BookingItem {
    apolloCacheId
    id
    businessId
    name
    isNPayUsed
    postPaid
    isSelfService
    isOrderAvailable
    desc
    precautionMessage
    url
    bookingUrl
    originalBookingUrl
    imageUrl
    imageUrls
    type
    bookingTimeUnit
    bizItemType
    bizItemSubType
    reviewStat {
      score
      count
    }
    minPrice
    maxPrice
    minBookablePeopleCount
    maxBookablePeopleCount
    isRealTimeBooking
    availableTime {
      displayTime
      keyTime
      date
      status
    }
    realTimeBookingDisabledDescription
  }
`,J=`
  fragment MyStyleAwards on MyStyleAwards {
    shop {
      year
      title
      bookingProductNo
      bookingProductName
      style
      type
    }
    stylists {
      year
      title
      bookingProductNo
      bookingProductName
      style
      type
    }
  }
`,$=`
  fragment Tvcast on Tvcast {
    type
    link
    imageUrl
    title
    description
    channelName
    episode
    dateString
    playTime
    videoId
    provider
    playCount
    recommendPoint
    channelId
    videoUrl
    author {
      id
      nickname
      from
      imageUrl
      objectId
      url
      borderImageUrl
    }
    channelEmblem
  }
`,et=null,ee=`
  fragment Images on PlaceDetailImages {
    images {
      origin
      number
      infoTitle
      url
      desc
      width
      height
      source
    }
    totalImages
  }
`,te=`
  fragment MenuImage on MenuImage {
    imageUrl
  }
`,oe=`
  fragment RecentBooking on RecentBookingResult {
    bookingId
    businessId
    resocId
    startDateFormatted
    dayDiff
    message {
      type
      text
      date
      bookingInfo
      visitCount
      daysPassed
    }
    useBookAgainButton
  }
`,ie=`
  fragment MyRecentVisit on MyRecentVisitResult {
    id
    visit {
      id
      visitCount
      visitDate
      visitDateRaw
      originType
      isReviewWritten
    }
    loginIdno
  }
`,tt=null,ot=null,ne=`#graphql
  fragment InfoTabDetails on RestaurantInfoTabDetails {
    seat {
      id
      name
      description
    }
  }
`,ae=`
  fragment RelatedLink on RelatedLink {
    name
    iconName
    url
    clickCode
  }
`,re=`
  fragment PlaceDetail_BaeminData on PlaceDetail_BaeminData {
    businessHours {
      temporaryCloseDate {
        start
        end
      }
      closeDate {
        start
        end
      }
      deliveryTime {
        start
        end
      }
    }
    rangeDeliveryFee
    deliveryFee
    menuGroups {
      order
      id
      name
      isRepresentative
      menus {
        order
        id
        catalogId
        name
        desc
        images
        price
        orderType
        source
        isRepresentative
        menuId
        nutrients
        allergies
      }
    }
    menus {
      order
      id
      catalogId
      name
      desc
      images
      price
      orderType
      source
      isRepresentative
      menuId
      nutrients
      allergies
    }
    foodOrg
  }
`,se=`
  fragment MenuSource on MenuSource {
    name
    link
    clickCode
  }
`,le=`
  fragment Mfds on Mfds {
    startDate
    endDate
    period
    hgLv
  }
`,ce=`
  fragment BookingAward on BookingAward {
    year
    comment
    award
  }
`,de=`
  fragment MichelinGuide on MichelinGuide {
    year
    star
    comment
    url
    hasGrade
    isBib
    alternateText
    greenStarComment
    hasExtraNew
    region
  }
`,me=`
  fragment BusinessHour on BusinessHour {
    index
    day
    isDayOff
    hourString
    startTime
    endTime
    hourString
    description
  }
`,ue=`
  fragment Menu on Menu {
    priority
    name
    price
    recommend
    nameForBlogReview
    change
    priceType
    description
    images
    id
    index
  }
`,ge=`
  fragment HikingCourse on HikingCourse {
    startName
    startPlaceId
    endName
    endPlaceId
    distance
    pname
    elevationId
    details {
      name
      startName
      startPlaceId
      endName
      endPlaceId
      facilities {
        name
        type
      }
      tsId
      tcId
      difficulty
    }
    mainCourse {
      mid
      distance
      duration
      maxAltitude
      difficulty
    }
    otherCourses {
      placeId
      distance
      duration
      maxAltitude
      difficulty
    }
    courseCirculation {
      exist
      direction
    }
    courseNotices {
      display
    }
  }
`,pe=`
  fragment Encyclopedia on Encyclopedia {
    total
    items {
      link
      body
      source
      imageUrl
      docId
      thumbCount
      alterName
      name
      subTitle
    }
    moreLink
  }
`,ye=`
  fragment Tickets on TicketItemsResult {
    total
    moreBookingUrl
    items {
      title
      priceString
      priceTailString
      discountRate
      imgUrl
      imgUrls
      dateString
      bookingUrl
      desc
      itemId
      imageCount
    }
  }
`,fe=`
  fragment Themepark on Themepark {
    filters {
      id
      cidList
      query
      displayName
    }
    aosUrl
    iosUrl
    linkName
    linkTitle
  }
`,he=`
  fragment PhotoTabInfo on PhotoTabInfo {
    sasImagesTotal
    clipTotal
  }
`,Te=`
  fragment ThemeparkAttraction on ThemeparkAttraction {
    category
    availDesc
    facilDesc
    limitUrl
    waitMm
    useEp
    status
    businessHours {
      index
      isDayOff
      startTime
      endTime
      hourString
      description
    }
    animals {
      nm
      imgeUrls
      sortOrd
      image
    }
    themeparkId
    themeparkName
  }
`,Ie=`
  fragment ComplexInfo on ComplexInfo {
    id
    completion
    typeName
    householdCount
    dongCount
    highestFloor
    listingCount {
      sale
      lease
      rent
    }
    size {
      min
      max
    }
    salePrice {
      min
      max
    }
    leasePrice {
      min
      max
    }
  }
`,Ce=`
  fragment BankResult on BankResult {
    bankName
    bankDisplayName
    waitingTicketUrl
    waitingStatus {
      name
      count
    }
    congestionStatus {
      start
      end
      statusCode
      status
    }
  }
`,Se=`
  fragment MovieTime on MovieTime {
    movieCode
    date
    name
    movieUrl
    movieUrlPC
    rate
    poster
    genre {
      genre_name
      genre_code
    }
    openDates {
      movie_opendate
    }
    runtime
    movieInfo {
      posterImage
      releaseDateList
      runningTime
      nation
      genreList
    }
    scheduleList {
      theaterName
      schedule {
        tcode
        rendtime
        ticketPcUrl
        rtime
        ticketMobileUrl
        isBookable
        gcode
      }
    }
  }
`,be=`
  fragment EvChargingStationResult on EvChargingStationResult {
    vendorName
    vendorCall
    vendorId
    placeCode
    locationDetail
    isPublic
    parkingCost
    freeParking
    chargingCost {
      cost
      power
      memberCost
      nonMemberCost
    }
    accessLimit
    notice
    operationTime
    membership {
      id
      name
    }
    chargerIds
  }
`,_e=`
  fragment Opinet on Opinet {
    prices {
      product
      tradeDate
      price
      avgPrice
      avgPriceLocation
      discountedPrice
    }
    infos {
      self {
        name
        available
      }
      sel24 {
        name
        available
      }
      wash {
        name
        available
      }
      cvs {
        name
        available
      }
      maint {
        name
        available
      }
    }
    isPublic
    isGasQualityCertified
    isGoodGasStation
  }
`,ve=`
  fragment Toilet on Toilet {
    serviceHours
    facilities {
      convenience
      hasDisabledFacility
    }
  }
`,ke=`
  fragment Nadle on Nadle {
    mobileUrl
    infoList
  }
`,Pe=`
  fragment Shelter on Shelter {
    type
    capacity
    area
  }
`,Re=`
  fragment PollingStation on PollingStation {
    bell
    slope
    toilet
    elevator
    brailleblock
    translateMessage
    isPollingStation
    exname
  }
`,Ne=`
  fragment RestArea on RestArea {
    lastUpdated
    brandList {
      name
      code
    }
    foodList {
      name
      etc
      cost
      bestFoodYn
      material
    }
    convList {
      code
      desc
      name
      lastAlterDate
    }
    stationList {
      oilCompany
      lpgPrice
      gasolinePrice
      diselPrice
      routeName
    }
  }
`,Ee=`
  fragment Mountain on Mountain {
    mtIdx
    walkingCount
    climbingCount
    mtAltitude
    courses {
      mid
      name
      difficulty
      placeId
    }
    courseNotices {
      display
    }
  }
`,De=`
  fragment Homepage on Homepage {
    etc {
      url
      landingUrl
      isDeadUrl
      type
      typeI18n
      order
      isRep
    }
    repr {
      url
      landingUrl
      isDeadUrl
      type
      typeI18n
      order
      isRep
    }
    subLinks {
      title
      url
      nclicksAction
    }
    isSiteData
  }
`,Oe=`
  fragment Sports on Sports {
    items {
      leftName
      leftNameFull
      rightName
      rightNameFull
      isTvOnAir
      mobileResultLinkURL
      mobileTvLinkURL
      mobileVodLinkURL
      compareLinkURL
      resultLinkURL
      highlightLinkURL
      dateStr
      date
      time
      dateTime
      message
      statusCode
      statusInfo
      category
      channels
    }
    lastUpdated
  }
`,Ue=`
  fragment Jto on Jto {
    link
    description
  }
`,Ae=`
  fragment ParkingmoduInfo on ParkingmoduInfo {
    businessHours {
      index
      day
      isDayOff
      startTime
      endTime
      description
      hourString
    }
    prices {
      id
      price
      name
    }
    mobileUrl
  }
`,Le=`
  fragment AniPharm on AniPharm {
    drugs
  }
`,Be=`
  fragment PlaceShoppingBranchSummary on PlaceShoppingBranchSummary {
    branchId
    subVertical
    homeUrl
    categories {
      url
      text
      image {
        origin
        number
        infoTitle
        url
        desc
        width
        height
        source
      }
    }
    products {
      id
      name
      representImage {
        origin
        number
        infoTitle
        url
        desc
        width
        height
        source
      }
      salePrice
      discountedSalePrice
      discountedRatio
      totalReviewCount
      averageReviewScore
      url
    }
    isFirstPurchase
  }
`,it=null,we=`
  fragment CP0Video on CP0Video {
    videoId
    contentType
    thumbnailUrl
    regDateTime
    editedDateTime
    content {
      placeSeq
      clipSeq
      feedSeq
      feedType
      title
      description
      backgroundMusic {
        title
        artists
      }
    }
    videoUrl
    trailerUrl
  }
`,Me=`
  fragment GoodPrice on GoodPrice {
    menuList {
      name
      price
    }
  }
`,xe=`
  fragment PaiUpperImage on PaiUpperImage {
    images
  }
`,He=`
  fragment SasImage on SasImage {
    relation
    total
    items {
      rank
      title
      imgUrl
      originalUrl
      text
      link
      section
      subsection
      width
      height
      date
      authorname
      authorThumbnail
    }
  }
`,nt=null,Fe=`
  fragment PanoramaItem on Panorama {
    id
    pan
    tilt
    lon
    lat
    fov
  }
`,Ge=`
  fragment NaverOrder on NaverOrder {
    items {
      id
      businessId
      type
      isOrderAvailable
      bookingUrl
    }
    isPickup
    isTableOrder
    isPreOrder
    isDelivery
  }
`,Ve=`
  fragment POS on POS {
    isPOS
    badge
    salesCount
    popularMenus {
      name
      count
      orderShare
      rankChange
    }
    averagePrice {
      morning
      lunch
      dinner
      night
      total
    }
    popularDay
    weeklyPopularity {
      monday {
        popularity
        popularTime
      }
      tuesday {
        popularity
        popularTime
      }
      wednesday {
        popularity
        popularTime
      }
      thursday {
        popularity
        popularTime
      }
      friday {
        popularity
        popularTime
      }
      saturday {
        popularity
        popularTime
      }
      sunday {
        popularity
        popularTime
      }
    }
    durationTime
    today
  }
`,Ke=`
  fragment Tabling on Tabling {
    isUsed
    tablePreemptionLimitKm
    tablePreemptionUrl
    queueingUrl
  }
`,Ye=`
  fragment EventSearchBusinessResult on EventSearchBusinessResult {
    total
    isNaverPlusMembership
    items {
      x
      y
      id
      name
      category
      discountRate
      totalReviewCount
      displayLimitAge
      address
      maxPrice
      minPrice
      optionInfos {
        id
        name
      }
      imageUrl
      imageUrls
      imageCount
      bookingUrl
      isOfficial
      participantCount
      providerName
      nPayPointAmount
    }
    queryString
    searchParam {
      query
      x
      y
      sortingOrder
      categoryIds
      rcodes
      spotIds
      locationNames
      optionIds
      age
      date
      availableBookType
      userSegment
    }
  }
`,We=`
  fragment RelatedPopupstore on RelatedPopupstore {
    id
    imageUrl
    name
    address
    popupstoreInfo {
      operationStartDateTime
      operationEndDateTime
      period
      status {
        key
        label
      }
    }
  }
`,qe=`
  fragment Popupstore on Popupstore {
    operationStartDateTime
    operationEndDateTime
    period
    visitType
    openTalkId
    detailBackgroundColor
    detailThemeType
    relatedPlace {
      id
      name
    }
    status {
      key
      label
    }
    promoVideos {
      viewId
      originalUrl
      width
      height
      title
      text
      desc
      link
      date
      photoType
      mediaType
      video {
        videoId
        videoUrl
        trailerUrl
      }
    }
    events {
      ongoing {
        status
        name
        desc
        period
        startDate
        endDate
        startTime
        endTime
        images {
          url
          thumbnail
          thumbnailRatio
        }
      }
      ended {
        status
        name
        desc
        period
        startDate
        endDate
        startTime
        endTime
        images {
          url
          thumbnail
          thumbnailRatio
        }
      }
    }
    goods {
      name
      price
      discountRate
      isFree
      isSoldOut
      images {
        url
      }
    }
    threeDRRepresentativeImage {
      url
    }
    popupProvider {
      name
      url
    }
  }
`,Xe=`
  fragment Dock on PlaceDetailDock {
    list {
      id
      name
      address
      x
      y
      routes {
        id
        distance
        maxDuration
        minDuration
        startName
        endName
      }
    }
  }
`,Qe=`
  fragment ConnectPlus on ConnectPlusBenefitMessage {
    title
    message
    icon
  }
`}}]);
