// Chụp hình đồ ăn
export const chupHinhDoAnColumn = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "DỊCH VỤ",
    dataIndex: "dichVu",
    key: "dichVu",
  },
  {
    title: "SỐ LƯỢNG MÓN",
    dataIndex: "soLuongMon",
    key: "soLuongMon",
  },
  {
    title: "SỐ LƯỢNG ẢNH",
    dataIndex: "soLuongAnh",
    key: "soLuongAnh",
  },
  {
    title: "ĐỊA ĐIỂM",
    dataIndex: "diaDiem",
    key: "diaDiem",
  },
  {
    title: "BẢNG GIÁ",
    dataIndex: "bangGia",
    key: "bangGia",
  },
  {
    title: "THÀNH TIỀN",
    dataIndex: "thanhTien",
    key: "thanhTien",
  },
];

export const chupHinhDoAnData = [
  {
    stt: 1,
    dichVu: "Chụp ảnh món ăn nền đơn sắc",
    soLuongMon: "Dưới 10 món",
    soLuongAnh: "2-3 ảnh/món (chỉnh file toàn bộ)",
    diaDiem: "Tại nhà hàng",
    bangGia: "1tr5 (từ món thứ 11 giảm 20%)",
    thanhTien: "(Foostylish 1tr5/buổi)",
  },
  {
    stt: 2,
    dichVu: "Chụp ảnh không gian nội (ngoại) thât nhà hàng",
    soLuongMon: "",
    soLuongAnh: "",
    diaDiem: "Tại nhà hàng",
    bangGia: "2tr5",
    thanhTien: "",
  },
  {
    stt: 3,
    dichVu: "Chụp tách nền",
    soLuongMon: "1-5 món",
    soLuongAnh: "2-3 ảnh/món",
    diaDiem: "Studio",
    bangGia: "1tr5",
    thanhTien: "",
  },
  {
    stt: 4,
    dichVu: "Chụp theo concept",
    soLuongMon: "5-10 món",
    soLuongAnh: "2-3 ảnh/món",
    diaDiem: "Studio",
    bangGia: "2tr5",
    thanhTien: "",
  },
  {
    stt: 5,
    dichVu: "Chụp ảnh ảnh làm menu",
    soLuongMon: "Trên 10 món",
    soLuongAnh: "2-3 ảnh/món",
    diaDiem: "Studio",
    bangGia: "100k/món",
    thanhTien: "",
  },
];

// Chụp ảnh doanh nhân
export const chupHinhDoanhNhanColumn = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "GÓI CHỤP",
    dataIndex: "goiChup",
    key: "goiChup",
  },
  {
    title: "THÀNH TIỀN",
    dataIndex: "thanhTien",
    key: "thanhTien",
  },
  {
    title: "MAKEUP + LÀM TÓC",
    dataIndex: "makeUpLamToc",
    key: "makeUpLamToc",
  },
  {
    title: "FILE ẢNH GỐC",
    dataIndex: "fileAnhGoc",
    key: "fileAnhGoc",
  },
  {
    title: "SỐ FILE CHỈNH SỬA",
    dataIndex: "soFileSua",
    key: "soFileSua",
  },
  {
    title: "ĐỊA ĐIỂM CHỤP",
    dataIndex: "diaDiem",
    key: "diaDiem",
  },
];

export const chupHinhDoanhNhanData = [
  {
    stt: 1,
    goiChup: "BASIC",
    thanhTien: "3.500.000",
    makeUpLamToc: "Makeup cơ bản + 1 CP chuyên nghiệp",
    fileAnhGoc: "100 file gốc (Nhận sau chụp)",
    soFileSua: "8 file chỉnh sửa",
    diaDiem: "Ichi Studio",
  },
  {
    stt: 2,
    goiChup: "PLUS",
    thanhTien: "3.500.000",
    makeUpLamToc: "Makeup cơ bản + 2 CP chuyên nghiệp + 1 Vest vip",
    fileAnhGoc: "150 file gốc (Nhận sau chụp)",
    soFileSua: "15 file chỉnh sửa",
    diaDiem: "Ichi Studio",
  },
  {
    stt: 3,
    goiChup: "LUXURY",
    thanhTien: "3.500.000",
    makeUpLamToc: "Makeup cơ bản + 3 CP chuyên nghiệp + 1 Vest vip",
    fileAnhGoc: "200 file gốc (Nhận sau chụp)",
    soFileSua: "20 file chỉnh sửa",
    diaDiem: "Ichi Studio",
  },
  {
    stt: 4,
    goiChup: "VIP 1",
    thanhTien: "3.500.000",
    makeUpLamToc: `Makeup + làm tóc
                        1 stylist riêng về trang phục & dáng
                        4 CP chuyên nghiệp + 3 Vest vip`,
    fileAnhGoc: "300 file gốc (Nhận sau chụp)",
    soFileSua: "30 file chỉnh sửa",
    diaDiem: "Ichi Studio",
  },
  {
    stt: 5,
    goiChup: "VIP 2",
    thanhTien: "3.500.000",
    makeUpLamToc: `Makeup + làm tóc
                        1 stylist riêng về trang phục & dáng
                        5 CP chuyên nghiệp + 5 Vest vip`,
    fileAnhGoc: "Không giới hạn",
    soFileSua: "50 file chỉnh sửa",
    diaDiem: "Ichi Studio + ngoại cảnh, 2 bối cảnh",
  },
];

// Chụp ảnh concept kinh doanh
export const chupHinhConceptColumn = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "GÓI CHỤP",
    dataIndex: "goiChup",
    key: "goiChup",
  },
  {
    title: "THÀNH TIỀN",
    dataIndex: "thanhTien",
    key: "thanhTien",
  },
  {
    title: "MAKE UP + LÀM TÓC",
    dataIndex: "makeUpLamToc",
    key: "makeUpLamToc",
  },
  {
    title: "SỐ NGƯỜI TỐI ĐA",
    dataIndex: "soNguoiToiDa",
    key: "soNguoiToiDa",
  },
  {
    title: "TRANG PHỤC",
    dataIndex: "trangPhuc",
    key: "trangPhuc",
  },
  {
    title: "FILE ẢNH GỐC",
    dataIndex: "fileAnhGoc",
    key: "fileAnhGoc",
  },
  {
    title: "SỐ FILE CHỈNH SỬA",
    dataIndex: "soFileSua",
    key: "soFileSua",
  },
  {
    title: "ĐỊA ĐIỂM CHỤP",
    dataIndex: "diaDiem",
    key: "diaDiem",
  },
];

export const chupHinhConceptData = [
  {
    stt: 1,
    goiChup: "BASIC",
    thanhTien: "6.000.000",
    makeUpLamToc: "1 lần/người",
    soNguoiToiDa: "5",
    trangPhuc: "2",
    fileAnhGoc: "300-500 ảnh",
    soFileSua: "5 ảnh cá nhân, 5 ảnh tập thể",
    diaDiem: "Studio",
  },
  {
    stt: 2,
    goiChup: "PLUS",
    thanhTien: "7.000.000 - 10.000.000",
    makeUpLamToc: "1 lần makeup + 2 lần làm tóc/người",
    soNguoiToiDa: "10",
    trangPhuc: "3",
    fileAnhGoc: "500-700 ảnh",
    soFileSua: "10 ảnh cá nhân, 10 ảnh tập thể",
    diaDiem: "Studio",
  },
  {
    stt: 3,
    goiChup: "LUXURY",
    thanhTien: "20.000.000 - 35.000.000",
    makeUpLamToc: "Theo trang phục",
    soNguoiToiDa: "10 đến 15",
    trangPhuc: "Theo concept, kịch bản",
    fileAnhGoc: "Không giới hạn",
    soFileSua: "15 ảnh cá nhân, 15 ảnh cá nhân",
    diaDiem: "Studio",
  },
];

// Chụp ảnh Sexy, nude
export const chupHinhSexyColumn = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "GÓI CHỤP",
    dataIndex: "goiChup",
    key: "goiChup",
  },
  {
    title: "MÔ TẢ",
    dataIndex: "moTa",
    key: "moTa",
  },
  {
    title: "SỐ LƯỢNG ẢNH",
    dataIndex: "soLuongAnh",
    key: "soLuongAnh",
  },
  {
    title: "THỜI GIAN",
    dataIndex: "thoiGian",
    key: "thoiGian",
  },
  {
    title: "ĐỊA ĐIỂM",
    dataIndex: "diaDiem",
    key: "diaDiem",
  },
  {
    title: "BẢNG GIÁ",
    dataIndex: "bangGia",
    key: "bangGia",
  },
];

export const chupHinhSexyData = [
  {
    stt: 1,
    goiChup: "Sexy Indoor 1",
    moTa: "1 người + (makeup & làm tóc free + 2 concept sexy, hỗ trợ trang phục)",
    soLuongAnh: "130-170 file gốc(chỉnh sửa 10)",
    thoiGian: "1 tiếng",
    diaDiem: "Studio",
    bangGia: "1.500.000",
  },
  {
    stt: 2,
    goiChup: "Sexy Indoor 2",
    moTa: "1 người + (makeup & làm tóc free + 2 concept sexy, hỗ trợ trang phục, tặng 2 ảnh in để bàn sang trọng)",
    soLuongAnh: "200-270 file gốc (chỉnh sửa 15)",
    thoiGian: "1-2 tiếng",
    diaDiem: "Studio",
    bangGia: "2.500.000",
  },
  {
    stt: 3,
    goiChup: "Sexy Indoor-Outdoor 3",
    moTa: "1 người + (makeup & làm tóc free + 3 concept sexy, hỗ trợ trang phục, tặng 01 hình phóng to ép gỗ cao cấp size 50×75)",
    soLuongAnh: "300-400 (chỉnh sửa 20)",
    thoiGian: "2-3 tiếng",
    diaDiem: "Studio, tại nhà, hotel",
    bangGia: "3.500.000",
  },
  {
    stt: 4,
    goiChup: "Sexy Indoor-Outdoor 4",
    moTa: "1 người + (makeup & làm tóc free + 3 concept sexy, hỗ trợ trang phục, tặng 01 album photobook size 30x30 30 trang, tặng 1 hình ép gỗ 40x60)",
    soLuongAnh: "Không giới hạn (chỉnh sửa 30)",
    thoiGian: "3-4 tiếng",
    diaDiem: "Studio, tại nhà, hotel",
    bangGia: "7.000.000",
  },
];

// Chụp ảnh Sexy, nude
export const chupHinhSanPhamColumn = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "PHÂN LOẠI",
    dataIndex: "phanLoai",
    key: "phanLoai",
  },
  {
    title: "MÔ TẢ",
    dataIndex: "moTa",
    key: "moTa",
  },
  {
    title: "SỐ LƯỢNG ẢNH",
    dataIndex: "soLuong",
    key: "soLuong",
  },
  {
    title: "BẢNG GIÁ",
    dataIndex: "bangGia",
    key: "bangGia",
  },
];

export const chupHinhSanPhamData = [
  {
    stt: 1,
    phanLoai: "SP dễ",
    moTa: "Kích thước vừa phải, độ bóng thấp, dễ dàng",
    soLuong: "Mỗi sản phẩm 2-3 ảnh",
    bangGia: "150k/1sp từ 10 sp trở lên 80k/sp",
  },
  {
    stt: 2,
    phanLoai: "SP trung bình",
    moTa: "Sản phẩm có kích thước trung bình, độ bóng nhất định",
    soLuong: "Mỗi sản phẩm 2-3 ảnh",
    bangGia: "200k/1sp từ 10 sp trở lên 100k/sp",
  },
  {
    stt: 3,
    phanLoai: "SP khó",
    moTa: "Sản phẩm có độ bóng cao, cồng kềnh hoặc nhỏ và siêu nhỏ",
    soLuong: "Mỗi sản phẩm 2-3 ảnh",
    bangGia: "Liên hệ 0949869869",
  },
];

// Chụp hình sự kiện
export const chupHinhSuKienColumn = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "GÓI CHỤP",
    dataIndex: "goiChup",
    key: "goiChup",
  },
  {
    title: "THỜI GIAN",
    dataIndex: "thoiGian",
    key: "thoiGian",
  },
  {
    title: "THÀNH TIỀN",
    dataIndex: "thanhTien",
    key: "thanhTien",
  },
  {
    title: "DEADLINE",
    dataIndex: "deadline",
    key: "deadline",
  },
  {
    title: "LƯU Ý",
    dataIndex: "luuY",
    key: "luuY",
  },
];

export const chupHinhSuKienData = [
  {
    stt: 1,
    goiChup: "",
    thoiGian: "Theo giờ",
    thanhTien: "800k/1h",
    deadline: "3-5 ngày",
    luuY: "Chi phí trên là chi phí cho 1 thợ chụp chưa bao gồm chi phí đi lại, ăn ở (nếu có)",
  },
  {
    stt: 2,
    goiChup: "",
    thoiGian: "1 buổi",
    thanhTien: "1.500.000/ Máy",
    deadline: "3-5 ngày",
    luuY: "Chi phí trên là chi phí cho 1 thợ chụp chưa bao gồm chi phí đi lại, ăn ở (nếu có)",
  },
  {
    stt: 3,
    goiChup: "",
    thoiGian: "1 ngày",
    thanhTien: "3.000.000/ Máy",
    deadline: "3-5 ngày",
    luuY: "Chi phí trên là chi phí cho 1 thợ chụp chưa bao gồm chi phí đi lại, ăn ở (nếu có)",
  },
];

// Quay review ô tô
export const quayReviewOtoColumn = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "GÓI QUAY",
    dataIndex: "goiQuay",
    key: "goiQuay",
  },
  {
    title: "THỜI LƯỢNG",
    dataIndex: "thoiLuong",
    key: "thoiLuong",
  },
  {
    title: "MÔ TẢ",
    dataIndex: "moTa",
    key: "moTa",
  },
  {
    title: "THÀNH TIỀN",
    dataIndex: "thanhTien",
    key: "thanhTien",
  },
];

export const quayReviewOtoData = [
  {
    stt: 1,
    goiQuay: "Cơ bản",
    thoiLuong: "1-2p",
    moTa: "Lồng nhạc + text chữ",
    thanhTien: "3.000.000/video",
  },
  {
    stt: 2,
    goiQuay: "Nâng cao",
    thoiLuong: "2-3p",
    moTa: "Có kịch bản",
    thanhTien: "5.000.000/video",
  },
  {
    stt: 3,
    goiQuay: "Cao cấp",
    thoiLuong: "2-3p",
    moTa: "Quay dựng có lời bình",
    thanhTien: "7.000.000/video",
  },
];

// Chụp review ô tô
export const chupHinhReviewOtoColumn = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "GÓI CHỤP",
    dataIndex: "goiChup",
    key: "goiChup",
  },
  {
    title: "SỐ LƯỢNG ẢNH",
    dataIndex: "soLuongAnh",
    key: "soLuongAnh",
  },
  {
    title: "MÔ TẢ",
    dataIndex: "moTa",
    key: "moTa",
  },
  {
    title: "THÀNH TIỀN",
    dataIndex: "thanhTien",
    key: "thanhTien",
  },
];

export const chupHinhReviewOtoData = [
  {
    stt: 1,
    goiChup: "Sp dễ",
    soLuongAnh: "2-3 ảnh/sản phẩm",
    moTa: "Kích thước vừa phải, độ bóng thấp, dễ dàng",
    thanhTien: "150k/1sp từ 10 sp trở lên 80k/sp",
  },
  {
    stt: 2,
    goiChup: "Sp trung bình",
    soLuongAnh: "2-3 ảnh/sản phẩm",
    moTa: "Kích thước vừa phải, độ bóng thấp, dễ dàng",
    thanhTien: "150k/1sp từ 10 sp trở lên 80k/sp",
  },
  {
    stt: 3,
    goiChup: "Sp khó",
    soLuongAnh: "2-3 ảnh/sản phẩm",
    moTa: "Kích thước vừa phải, độ bóng thấp, dễ dàng",
    thanhTien: "150k/1sp từ 10 sp trở lên 80k/sp",
  },
];
