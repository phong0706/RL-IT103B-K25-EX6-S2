let registeredMembers = 0;
let totalRevenue = 0;
let checkInCount = 0;
let hasRegistered = false;

let userMenuChoice = 1;
let subStep = 1;

do {
  const currentChoice = userMenuChoice;

  switch (currentChoice) {
    case 1:
      const rawMemberName = "  nguyễn văn a  ";
      const rawPackageType = "vip";
      const durationMonths = 12;
      const ptSessions = 10;

      const cleanName = rawMemberName.trim().toUpperCase();
      const cleanPackage = rawPackageType.trim().toUpperCase();

      if (cleanName.length > 0 && (cleanPackage === "STANDARD" || cleanPackage === "VIP")) {
        registeredMembers++;
        hasRegistered = true;
        console.log(`Đăng ký thành công hội viên: ${cleanName} - Gói: ${cleanPackage}`);
      } else {
        console.log("Thông tin đăng ký không hợp lệ.");
      }

      userMenuChoice = 2;
      break;

    case 2:
      if (!hasRegistered) {
        console.log("Lỗi: Vui lòng thực hiện đăng ký hội viên (Chức năng 1) trước khi tính tiền!");
        userMenuChoice = 4;
        break;
      }

      const activePackage = "VIP";
      const months = 12;
      const ptCount = 10;

      let monthlyPrice = 500000;
      if (activePackage === "VIP") {
        monthlyPrice = 800000;
      }

      const packageTotal = monthlyPrice * months;
      const ptTotal = ptCount * 300000;
      let rawBill = packageTotal + ptTotal;

      let discountRate = 0;
      if (months >= 12) {
        discountRate = 0.25;
      } else if (months >= 6) {
        discountRate = 0.15;
      }

      const finalBill = rawBill * (1 - discountRate);
      totalRevenue += finalBill;

      console.log("--- HÓA ĐƠN THANH TOÁN GÓI TẬP ---");
      console.log(`- Tổng tiền gói: ${finalBill.toLocaleString("vi-VN")} VNĐ`);

      userMenuChoice = 3;
      break;

    case 3:
      const rawCardCode = "  gym-vip-2026  ";
      const cleanCardCode = rawCardCode.trim().toUpperCase();
      const currentYear = "2026";

      if (cleanCardCode.startsWith("GYM-") && cleanCardCode.endsWith(currentYear)) {
        checkInCount++;
        console.log(`Check-in thành công cho thẻ: ${cleanCardCode}`);
      } else {
        console.log("Mã thẻ check-in không hợp lệ quy định.");
      }

      userMenuChoice = 4;
      break;

    case 4:
      const borderLine = "=".repeat(45);
      console.log(borderLine);
      console.log("       BÁO CÁO TỔNG KẾT CA TRỰC PHÒNG GYM       ");
      console.log(borderLine);
      console.log(`- Tổng số hội viên đăng ký : ${registeredMembers}`);
      console.log(`- Tổng doanh thu ca trực   : ${totalRevenue.toLocaleString("vi-VN")} VNĐ`);
      console.log(`- Tổng lượt khách check-in : ${checkInCount}`);
      console.log(borderLine);

      userMenuChoice = 0;
      break;

    default:
      userMenuChoice = 0;
      break;
  }
} while (userMenuChoice !== 0);