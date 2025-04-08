import Badge from './Badge';


export default function Badges() {
  return (
    <>
      <h2>Badge components</h2>
      <div className="badge-container">
        <div>
          <Badge color="#F3F4F6" shape="pill" textColor="#1F2937">Badge</Badge>
          <Badge color="#F3F4F6" shape="square" textColor="#1F2937">Badge</Badge>
        </div>
        <div>
          <Badge color="#FEE2E2" shape="pill"textColor="#991B1B">Badge</Badge>
          <Badge color="#FEE2E2" shape="square"textColor="#991B1B">Badge</Badge>
        </div>
        <div>
          <Badge color="#FEF3C7" shape="pill"textColor="#92400E">Badge</Badge>
          <Badge color="#FEF3C7" shape="square"textColor="#92400E">Badge</Badge>
        </div>
        <div>
          <Badge color="#D1FAE5" shape="pill"textColor="#065F46">Badge</Badge>
          <Badge color="#D1FAE5" shape="square"textColor="#065F46">Badge</Badge>
        </div>
        <div>
          <Badge color="#DBEAFE" shape="pill"textColor="#1E40AF">Badge</Badge>
          <Badge color="#DBEAFE" shape="square"textColor="#1E40AF">Badge</Badge>
        </div>
        <div>
          <Badge color="#E0E7FF" shape="pill"textColor="#3730A3">Badge</Badge>
          <Badge color="#E0E7FF" shape="square"textColor="#3730A3">Badge</Badge>
        </div>
        <div>
          <Badge color="#EDE9FE" shape="pill"textColor="#5B21B6">Badge</Badge>
          <Badge color="#EDE9FE" shape="square"textColor="#5B21B6">Badge</Badge>
        </div>
        <div>
          <Badge color="#FCE7F3" shape="pill"textColor="#9D174D">Badge</Badge>
          <Badge color="#FCE7F3" shape="square"textColor="#9D174D">Badge</Badge>
        </div>
        <div>
          {/* passing nothing, to show the default */}
          <Badge />
          <Badge />
        </div>
      </div>
    </>

  )
}
