// Регистрация нового пользователя
export function registerUser(userData) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Проверка на существующего пользователя
    if (users.some(user => user.email === userData.email)) {
      throw new Error('Пользователь с таким email уже существует');
    }
    
    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      password: userData.password,
      tickets: []
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
  }
  
  // Вход пользователя
  export function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Неверный email или пароль');
    }
    
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  
  // Выход пользователя
  export function logoutUser() {
    localStorage.removeItem('currentUser');
  }
  
  // Проверка авторизации
  export function isAuthenticated() {
    return !!localStorage.getItem('currentUser');
  }
  
  // Получение текущего пользователя
  export function getUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  
  // Обновление данных пользователя
  export function updateUser(updatedData) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    const updatedUser = {
      ...currentUser,
      name: updatedData.name || currentUser.name,
      email: updatedData.email || currentUser.email,
      phone: updatedData.phone || currentUser.phone,
      password: updatedData.password || currentUser.password
    };
    
    // Обновляем в списке пользователей
    const updatedUsers = users.map(user => 
      user.id === currentUser.id ? updatedUser : user
    );
    
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  }
  
  // Получение билетов пользователя
  export function getUserTickets() {
    const user = getUser();
    return user ? user.tickets : [];
  }
  
  // Добавление билета
  export function addTicket(ticket) {
    const user = getUser();
    if (!user) return;
    
    const updatedUser = {
      ...user,
      tickets: [...user.tickets, ticket]
    };
    
    // Обновляем текущего пользователя
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    
    // Обновляем в списке пользователей
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u => 
      u.id === user.id ? updatedUser : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }