export const COLOURS = {
    white:'#ffffff',
    black:'#000000',
    green:'#00AC76',
    red:'#C04345',
    blue:'#0043F9',
    backgroundLight:'#F0F0F3',
    backgroundMedium:'#B9B9B9',
    backgroundDark:'#777777',
}
export const Items = [
    {
        id:1,
        isAvailable:true,
        dis1:'Ống lồng-giảm chấn thủy lực; giảm xóc đôi, giảm chấn thủy lực',
        dis2:'Công nghệ pin LFP vượt trội với công nghệ pack pin và phần mềm quản lý do VinFast tự nghiên cứu & phát triển đảm bảo pin hoạt động an toàn và ổn định',
        dis3:'Tốc độ tối đa 70 km/h.',
        dis4:'Tiêu chuẩn chống nước IP67. Động cơ có khả năng chống nước vượt trội ở mức nước ngập sâu 0,5m trong thời gian 30 phút.',
        cop:'22 lít',
        speed:'70 km/h',
        road:'203 km/ 1 lần sạc',
        ratting:4.9,
        category:'product',
        productName:'EVO 200',
        ProductPrice:'22,000,000',
        description:'NỐI DÀI TỰ DO - MỞ RỘNG TRẢI NGHIỆM',
        isOff:true,
        offPercentage:'Mới',
        productImage:require('../database/images/products/evo200.png'),
        productImageList: [
         require('../database/images/evo200/e1.png'),
         require('../database/images/evo200/e2.png'),
         require('../database/images/evo200/e3.png'),
         require('../database/images/evo200/e4.png'),
         require('../database/images/evo200/e5.png'),
         
        ]


    },
    {
        id:2,
        isAvailable:true,
        dis1:'Hệ thống phanh an toàn. Bộ giảm xóc trước/sau giúp xe vận hành êm ái.',
        dis2:'Pin LFP với dung lượng 3,5 KWh, cho quãng đường lên tới khoảng 198 km chỉ với 1 lần sạc (theo điều kiện tiêu chuẩn của VinFast).',
        dis3:'Động cơ điện được nâng cấp với công suất tối đa 3000W.',
        dis4:'Công nghệ chống nước IP67 hoạt động ổn định ngay cả khi ngập nước 0,5m trong 30 Phút.',
        cop:'25 lít',
        speed:'78 km/h',
        road:'198 km/ 1 lần sạc',
        category:'accessory',
        productName:'FELIZ S',
        ProductPrice:'39,900,000',
        description:'SỐNG XANH THANH LỊCH',
        isOff:false,
        offPercentage:'Mới',
        productImage:require('../database/images/products/FELIZ.png'),
        productImageList: [
         require('../database/images/feliz/f1.png'),
         require('../database/images/feliz/f2.png'),
         require('../database/images/feliz/f3.png'),
         require('../database/images/feliz/f4.png'),
         require('../database/images/feliz/f5.png'),
         
        ]


    },
    {
        id:3,
        category:'accessory',
        dis1:'Hệ thống phanh ABS Continental trước, sau tăng khả năng chống trượt khi di chuyển, an toàn trên mọi địa hình.',
        dis2:'Pin Lithium sử dụng công nghệ Cell Pin của Samsung và công nghệ Pack Pin tiên tiến do VinFast nghiên cứu và phát triển, đạt chuẩn châu Âu UNR R136.',
        dis3:'Động cơ điện đặt tại vị trí trung tâm, truyền động bằng dây xích, sản sinh công suất 3500W.',
        dis4:'Trang bị công nghệ PAAK (Phone As A Key) hiện đại, kết nối HMI - tích hợp Esim, và Khóa thông minh.',
        cop:'17 lít',
        speed:'101 km/h',
        road:'150 km/ 1 lần sạc',
        productName:'THEON',
        ProductPrice:'63,900,000',
        description:'CÔNG NGHỆ BỨT PHÁ - TRẢI NGHIỆM ĐỈNH CAO',
        isOff:false,
        isAvailable:false,
        offPercentage:'Top10',
        productImage:require('../database/images/products/theons.png'),
        productImageList: [
         require('../database/images/theon/t1.png'),
         require('../database/images/theon/t2.png'),
         require('../database/images/theon/t3.png'),
         require('../database/images/theon/t4.png'),
         require('../database/images/theon/t5.png'),
           ]


    },
    {
        id:4,
        isAvailable:true,
        dis1:'Hệ thống phanh ABS tại cả bánh trước và sau, tăng khả năng chống trượt trong quá trình di chuyển, đảm bảo an toàn trên mọi địa hình.',
        dis2:'Công nghệ pin LFP vượt trội với công nghệ pack pin và phần mềm quản lý do VinFast tự nghiên cứu & phát triển đảm bảo pin hoạt động an toàn ổn định.',
        dis3:'Động cơ điện đặt tại vị trí trung tâm, truyền động bằng dây xích, sản sinh công suất tối đa 7100W.',
        dis4:'Trang bị công nghệ PAAK (Phone As A Key) hiện đại, kết nối HMI - tích hợp Esim, và Khóa thông minh.',
        cop:'17 lít',
        speed:'99 km',
        road:'150 km/ 1 lần sạc',
        category:'accessory',
        productName:'THEON S',
        ProductPrice:'69,900,000',
        description:'CÔNG NGHỆ BỨT PHÁ - TRẢI NGHIỆM ĐỈNH CAO',
        isOff:false,
        offPercentage:10,
        productImage:require('../database/images/products/THEON.png'),
        productImageList: [
            require('../database/images/theon/t1.png'),
            require('../database/images/theon/t2.png'),
            require('../database/images/theon/t3.png'),
            require('../database/images/theon/t4.png'),
            require('../database/images/theon/t5.png'),
        ]


    },
    {
        id:5,
        isAvailable:true,
        cop:'25 lít',
        speed:'80km/h',
        road:'160 km/ 1 lần sạc',
        category:'accessory',
        productName:'VENTO S',
        ProductPrice:'56,000,000',
        description:'BỨT PHÁ CÔNG NGHỆ - TIÊN PHONG DẪN BƯỚC',
        dis1:'Phanh đĩa trước trang bị ABS, phanh đĩa sau Giảm xóc ống lồng - giảm chấn thủy lực; giảm xóc đôi, giảm chấn thủy lực.',
        dis2:'Xe sử dụng 01 pin công nghệ LFP giúp xe đạt hiệu suất vận hành cao, an toàn và thân thiện môi trường.',
        dis3:'Động cơ Side Motor với công suất tối đa 5200W. Giúp xe có khả năng vận hành tốt hơn, bền bỉ hơn và tiết kiệm năng lượng.',
        dis4:'Công nghệ PAAK điều khiển xe qua app điện thoại, kết nối HMI - tích hợp Esim và khóa thông minh.',
        isOff:false,
        offPercentage:10,
        productImage:require('../database/images/products/VENTO.png'),
        productImageList: [
         require('../database/images/vento/v1.png'),
         require('../database/images/vento/v2.png'),
         require('../database/images/vento/v3.png'),
         require('../database/images/vento/v4.png'),
         require('../database/images/vento/v5.png'),
         
        ]


    },
    {
        id:6,
        isAvailable:false,
        dis1:'Hệ thống phanh đĩa trước Nissin, phanh cơ phía sau, cùng giảm xóc Kaifa êm ái.',
        dis2:'Pin Lithium tiên tiến với dung lượng cao, công suất lớn và độ bền vượt trội.',
        dis3:'Động cơ do VinFast nghiên cứu và phát triển, mạnh mẽ bền bỉ và thân thiện với môi trường.',
        dis4:'Tiêu chuẩn chống nước IP67, (động cơ chịu ngập nước trong vòng 30 phút với mức ngập lên đến 0.5m).',
        cop:'23 lít',
        speed:'78km/h',
        road:'194 km/ 1 lần sạc',
        category:'accessory',
        productName:'KLARA S (2022)',
        ProductPrice:'36,000,000',
        description:'SỐNG XANH THANH LỊCH',
        isOff:false,
        offPercentage:'Top10',
        productImage:require('../database/images/products/KLARA.png'),
        productImageList: [
         require('../database/images/klara/k1.png'),
         require('../database/images/klara/k2.png'),
         require('../database/images/klara/k3.png'),
         require('../database/images/klara/k4.png'),
         require('../database/images/klara/k5.png'),
        ]


    },
    {
        id:7,
        isAvailable:false,
        dis1:'Ống lồng-giảm chấn thủy lực; giảm xóc đôi, giảm chấn thủy lực',
        dis2:'Công nghệ pin LFP vượt trội với công nghệ pack pin và phần mềm quản lý do VinFast tự nghiên cứu & phát triển đảm bảo pin hoạt động an toàn và ổn định',
        dis3:'Tốc độ tối đa 49 km/h.',
        dis4:'Tiêu chuẩn chống nước IP67. Động cơ có khả năng chống nước vượt trội ở mức nước ngập sâu 0,5m trong thời gian 30 phút.',
        cop:'22 lít',
        speed:'49 km/h',
        road:'205 km/ 1 lần sạc',
        category:'product',
        productName:'EVO LITE',
        ProductPrice:'22,000,000',
        description:'NỐI DÀI TỰ DO - MỞ RỘNG TRẢI NGHIỆM',
        isOff:true,
        offPercentage:'Mới',
        productImage:require('../database/images/products/evo200.png'),
        productImageList: [
            require('../database/images/evo200/e1.png'),
            require('../database/images/evo200/e2.png'),
            require('../database/images/evo200/e3.png'),
            require('../database/images/evo200/e4.png'),
            require('../database/images/evo200/e5.png'),
            
        ]


    },                        
]
export const actor=[
    {
        id:1,
        actorImage:require('../database/images/products/air-max-flyknit-racer-shoes-Q9lN71.png'),
        actorName:'Tien'
    }
]