# Tạo và chuyển sang nhánh main
git checkout -b main

# Thêm tất cả các tệp vào staging
git add .

# Commit các thay đổi
git commit -m "Initial commit with lesson structure"

# Thêm remote với tên origin và URL của repository GitHub
git remote add origin https://github.com/phihung2752/js-ando.git

# Đẩy nhánh main lên GitHub
git push -u origin main