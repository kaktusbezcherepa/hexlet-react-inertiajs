# Используем официальный образ PHP
FROM php:8.2-fpm

# Устанавливаем необходимые зависимости
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    curl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd

# Устанавливаем Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Копируем код приложения в контейнер
WORKDIR /var/www
COPY . .

# Устанавливаем зависимости Composer
RUN composer install

# Устанавливаем Node.js и npm
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install

# Собираем фронтенд
RUN npm run build

# Открываем порт
EXPOSE 9000

CMD ["php-fpm"]
