export const controllers = {
  NewAccount: () => import('#controllers/new_account_controller'),
  Profile: () => import('#controllers/profile_controller'),
  AccessToken: () => import('#controllers/access_token_controller'),
}
