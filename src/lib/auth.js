import auth from "@react-native-firebase/auth";

export function signIn({email, password}) {
  return auth().signInWithEmailAndPassword(email, password);
} // 로그인

export function signUp({email, password}) {
  return auth().createUserWithEmailAndPassword(email, password);
} // 회원가입

export function subscribeAuth(callback) {
  return auth().onAuthStateChanged(callback);
} // 앱을 가동할 때, 로그인 상태가 변경될 때 사용자 정보를 받아오는 함수

export function signOut() {
  return auth().signOut();
} // 로그아웃