import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="top-footer">
        <h3 className="top-footer-title">متواجدين دائماً لمساعدتك</h3>
        <div className="top-footer-email">
          <span className="top-footer-text">تواصل معنا عبر الإيميل</span>
          <span className="top-footer-email-address">
            <i className="bi bi-envelope"></i>
            store@fakeemail.com
          </span>
        </div>
      </div>
      <div className="middle-footer">
        <div className="footer-item">
          <h4 className="footer-item-title">الإلكترونيات</h4>
          <ul>
            <li>الكاميرات وتسجيلات الفيديو</li>
            <li>الأجهزة المنزلية</li>
            <li>الهواتف</li>
            <li>سماعات الرأس</li>
            <li>التلفزيونات</li>
            <li>أجهزة التابليت</li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title">الأزياء</h4>
          <ul>
            <li> أزياء رجالية</li>
            <li> أزياء نسائية</li>
            <li>أزياء الأولاد</li>
            <li> نظارات</li>
            <li>المجوهرات</li>
            <li>السماعات </li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title">المطبخ والأجهزة المنزلية</h4>
          <ul>
            <li>ديكورات منتزل</li>
            <li>الأثاث</li>
            <li>المطبخ و أدوات الطعام</li>
            <li>مستلزمات الحمام</li>
            <li>أجهزة صوت و فيديو</li>
            <li>مستلزمات الحدائق</li>
          </ul>
        </div>
        <div className="footer-item">
          <h4 className="footer-item-title">الجمال</h4>
          <ul>
            <li>العطور </li>
            <li>المكياج</li>
            <li>العناية بالشعر</li>
            <li>العناية بالبشرة</li>
            <li>الجسم والاستحمام</li>
            <li>منتجلت الرعاية الصحية</li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer">
        <i className="bi bi-c-circle"></i>2024 كل الحقوق محفوظة
      </div>
    </footer>
  );
}
